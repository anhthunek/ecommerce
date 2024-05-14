import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrums from "../../components/Breadcrums";
import "./Products.scss";
import {
  faArrowRight,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [filterSearch, setFilterSearch] = useState(" ");
  const [filterMin, setFilterMin] = useState("");
  const [filterMax, setFilterMax] = useState("");
  const [active, setActive] = useState("All");
  const [select, setSelect] = useState("none");
  console.log(typeof filterMin);
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "men's clothing",
    },
    {
      id: 3,
      name: "jewelery",
    },
    {
      id: 4,
      name: "electronics",
    },
    {
      id: 5,
      name: "women's clothing",
    },
  ];
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setData(await res.clone().json());
      setFilter(await res.json());
    };
    getProducts();
  }, []);
  console.log(data);
  const filterProduct = () => {
    if (filterMax === "" || filterMin === "") {
      setFilterMax('')
      setFilterMin('')
    }
    const result = data.filter((prod) => {
      if (active === "All") {
        return filterMax !== "" && filterMin !== ""
          ? prod.title.toLowerCase().includes(filterSearch) &&
              prod.price >= filterMin &&
              prod.price <= filterMax
          : prod.title.toLowerCase().includes(filterSearch);
      } else {
        return filterMax !== "" && filterMin !== ""
          ? prod.title.toLowerCase().includes(filterSearch) &&
              active === prod.category &&
              prod.price >= filterMin &&
              prod.price <= filterMax
          : prod.title.toLowerCase().includes(filterSearch) &&
              active === prod.category;
      }
    });
    const order =
      select !== "none"
        ? select === "low_to_high"
          ? result.sort((a, b) => a.price - b.price)
          : result.sort((a, b) => b.price - a.price)
        : result;

    setFilter(order);
  };

  return (
    <div className="products__wrapper">
      <Breadcrums />
      <h1 className="products__title">Shop</h1>
      <div className="home__input__area">
        <div className="home__input__container">
          <FontAwesomeIcon icon={faSearch} />
          <input
            value={filterSearch}
            type="text"
            onChange={(e) => setFilterSearch(e.target.value.toLowerCase())}
            placeholder="Tìm kiếm sản phẩm"
          />
          <button onClick={filterProduct} className="home__input__btn">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="products__filter">
        <div className="products__filter__price">
          <h4 className="filter__title">Giá</h4>

          <div className="filter__price__area">
            <div className="filter__price__input">
              <label>From</label>
              <input
                type="number"
                value={filterMin}
                placeholder="VND"
                onChange={(e) => setFilterMin(e.target.value)}
              />
              <span className="mx"></span>
              <label>To</label>
              <input
                type="number"
                placeholder="VND"
                value={filterMax}
                onChange={(e) => setFilterMax(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="products__filter__category">
          <h4 className="filter__title">Danh mục sản phẩm</h4>
          <div className="category__list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={
                  cat.name === active
                    ? "category__list__item active"
                    : "category__list__item"
                }
                onClick={() => {
                  setActive(cat.name);
                  // filterProduct()
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <div className="products__filter__order">
          <h4 className="filter__title">Sắp xếp</h4>
          <select
            value={select}
            className="filter__select"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="none">Không</option>
            <option value="low_to_high">Giá từ thấp đến cao</option>
            <option value="high_to_low">Giá từ cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className="products__filter__btn">
        <button onClick={filterProduct} className="filter__price__btn">
          Lọc
        </button>
      </div>
      <div className="products__list">
        {filter.length >0 ?filter.map((prod) => {
          return (
            <div key={prod.id} className="single__product">
              <div className="single__product__img">
                <Link to={`/products/${prod.id}`}>
                  <div className="single__product__bg"></div>
                  <img src={prod.image} alt="" />
                </Link>
              </div>
              <div className="product__info">
                <div className="product__info__category">{prod.category}</div>
                <div className="product__info__name">
                  <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                </div>
                <div className="product__info__price">{prod.price} VND</div>
             
                <Link to={`/products/${prod.id}`} className="product__info__btn">Xem ngay</Link>
              
              </div>
            </div>
          );
        }) : <h3>Không có sản phẩm nào!</h3>}
      </div>
    </div>
  );
}

export default Products;
