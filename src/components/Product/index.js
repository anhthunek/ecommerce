import { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import Breadcrums from "../Breadcrums";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../pages/Cart/cartSlice";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`http://localhost:8000/products/${id}`);
      setProduct(await res.json());
    };
    getProduct();
  }, []);
  console.log(product);
  const handleClickAddCart = () => {
    dispatch(addProduct(product))
    alertify.set("notifier", "position", "top-center");
        alertify.set("notifier", "delay", 4);
        alertify.success("Đã thêm vào giỏ hàng");
  }
  return (
    <div className="product__wrapper">
          <Breadcrums id={id} product={product} />
         
            <div className="product__container">
          <div className="product__img"><div className="single__product__bg"></div><img src={product.image}/></div>
          <div className="product__desc">
            <h1 className="product__desc__title">{product.title}</h1>
            <p className="product__desc__price">{product.price} VND</p>
            {/* <div className="product__desc__quantity">
                <button>+</button>
                <input type="number" value='1'/>
                <button>-</button>
            </div> */}
            <div className="product__desc__btns">
                <button className="btn__cart" onClick={handleClickAddCart} >Thêm vào giỏ hàng</button>
                <button className="btn__buy">Mua ngay</button>
            </div>
            <p className="product__desc__category">Category: {product.category}</p>
            
            <div className="product__desc__detail">
                <h4>Mô tả:</h4>
                <p>{product.description}</p>
            </div>
          </div>
      </div>
        
            
        
      

    </div>
  );
}

export default Product;