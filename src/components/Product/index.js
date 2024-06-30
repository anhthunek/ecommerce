import { useEffect, useState } from "react";
import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import Breadcrums from "../Breadcrums";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../pages/Cart/cartSlice";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import Loading from "../Loading";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.user.login);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false)
    };
    getProduct();
  }, []);
  console.log(product);
  const handleClickAddCart = () => {
    if (isLoggedin) {
      dispatch(addProduct(product));
      alertify.set("notifier", "position", "top-center");
      alertify.set("notifier", "delay", 4);
      alertify.success("Đã thêm vào giỏ hàng");
    } else {
      alertify.set("notifier", "position", "top-center");
      alertify.set("notifier", "delay", 4);
      alertify.warning("Đăng nhập để tiếp tục!");
    }
  };
  return (
    
<>
  {loading ? <Loading/> : (
    <div className="product__wrapper">
      <Breadcrums id={id} product={product} />
      <div className="product__container">
        <div className="product__img">
          <div className="single__product__bg"></div>
          <img src={product.image} />
        </div>
        <div className="product__desc">
          <h1 className="product__desc__title">{product.title}</h1>
          <p className="product__desc__price">${product.price}</p>
          <div className="product__desc__btns">
            <button className="btn__cart" onClick={handleClickAddCart}>
              Thêm vào giỏ hàng
            </button>
            
          </div>
          <p className="product__desc__category">
            Category: {product.category}
          </p>

          <div className="product__desc__detail">
            <h4>Mô tả:</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) }
</>
  );
}

export default Product;
