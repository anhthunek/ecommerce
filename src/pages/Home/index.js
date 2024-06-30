import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { categories } from "../Products";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
function Home() {
  const [active, setActive] = useState("All");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setData(await res.clone().json());
      setFilter(await res.json());
      setLoading(false);
    };
    getProducts();
  }, []);
  const filterProduct = (cat) => {
    setActive(cat);
    const result = data.filter((prod) => {
      return cat === "All" ? data : cat.toLowerCase() === prod.category;
    });
    setFilter(result);
  };
  return (
    <div className="home__wrapper">
      <div className="home__container">
        <div className="home__banner">
          <div className="home__banner__left">
            <img src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/img-2_9c6b0dde-b59b-44ae-812c-0f74862db5dc_720x.jpg?v=1617764993" />
            <div className="banner__content">
              <h5 className="banner__title">Winter Coats</h5>
              <Link to="/products" className="banner__btn">
                Mua ngay
              </Link>
            </div>
          </div>

          {/* Slide */}
          <div className="home__slide">
            <div className="slide-area">
              <Swiper
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                tabIndex={-1}
              >
                <SwiperSlide>
                  <div className="slide-item">
                    <div className="home__img">
                      <img
                        src="https://demo-kalles-4-3.myshopify.com/cdn/shop/files/girl_720x_2f95020a-48e2-4d89-b75d-c09e4c85fe48.jpg?v=1652344982&width=700"
                        alt="home_img"
                      />
                    </div>
                    <div className="banner__content">
                      <Link className="banner__title2" to="/products">
                        A HUGE SALE{" "}
                        <FontAwesomeIcon
                          className="banner__icon"
                          icon={faArrowRight}
                        />
                      </Link>
                      <p>UP TO 70% OFF FAHION COLLECTION SHOP NOW</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-item">
                    <div className="home__img">
                      <img
                        src="https://demo-kalles-4-3.myshopify.com/cdn/shop/files/girl_720x_2f95020a-48e2-4d89-b75d-c09e4c85fe48.jpg?v=1652344982&width=700"
                        alt="home_img"
                      />
                    </div>
                    <div className="banner__content">
                      <Link className="banner__title2" to="/products">
                        A HUGE SALE{" "}
                        <FontAwesomeIcon
                          className="banner__icon"
                          icon={faArrowRight}
                        />
                      </Link>
                      <p>UP TO 70% OFF FAHION COLLECTION SHOP NOW</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="home__banner__area">
          <p className="banner__text">
            Tận hưởng mùa hè với bộ sưu tập mới 2024
          </p>
          <Link className="banner__btn" to="/products">
            Mua ngay
            <FontAwesomeIcon className="banner__icon" icon={faArrowRight} />
          </Link>
        </div>
        <div className="home__products">
          <h2 className="products__title">Products</h2>
          <div className="products__filter">
            <div className="products__filter__category">
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
                      filterProduct(cat.name);
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="products__list">
            {loading ? (
              <Loading />
            ) : (
              filter.map((prod) => {
                return (
                  <div key={prod.id} className="single__product">
                    <div className="single__product__img">
                      <Link to={`/products/${prod.id}`}>
                        <div className="single__product__bg"></div>
                        <img src={prod.image} alt="" />
                      </Link>
                    </div>
                    <div className="product__info">
                      <div className="product__info__category">
                        {prod.category}
                      </div>
                      <div className="product__info__name">
                        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                      </div>
                      <div className="product__info__price">${prod.price}</div>
                      <Link
                        to={`/products/${prod.id}`}
                        className="product__info__btn"
                      >
                        Xem ngay
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
