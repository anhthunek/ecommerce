import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrums from "../../components/Breadcrums";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  checkout,
  decrement,
  deleteProduct,
  increment,
  inputQuantity,
} from "./cartSlice";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
function Cart() { 
  const isLoggedIn = useSelector((state) => state.user.login);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClickCheckOut = () => {
    dispatch(checkout(""));
    alertify.set("notifier", "position", "top-center");
    alertify.set("notifier", "delay", 4);
    alertify.success("Mua hàng thành công!");
  };
  console.log(cartItems);
  let total = 0;

  return (
    <div className="cart__wrapper">
      <Breadcrums />
      {isLoggedIn ? (
        cartItems.length > 0 ? (
          <>
          <div className="cart__phone">
              {cartItems.map((item) => {
                total += item.price * item.quantity;
                return (
                  <div className="cart__item">
                    <div className="item__btn">
                      <button
                        className="item__action"
                        onClick={() => dispatch(deleteProduct(item))}
                      >
                        <FontAwesomeIcon
                          className="action__btn"
                          icon={faXmark}
                        />
                      </button>
                    </div>
                    <div className="item__info">
                      <div className="item__img">
                        <img src={item.image} />
                      </div>
                      <div className="item__quantity">
                        <h4>{item.title}</h4>
                        <div className="item__row">
                          <p>{item.price} VND</p>
                          <div className="product__desc__quantity">
                            <button onClick={() => dispatch(increment(item))}>
                              +
                            </button>
                            <input value={item.quantity} />
                            <button onClick={() => dispatch(decrement(item))}>
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <table>
                <tfoot>
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      <strong>Total:</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>{Math.round(total,1)}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="checkout__btn">
                <button
                  onClick={handleClickCheckOut}
                  className="checkout__btn__area"
                >
                  Check out
                </button>
              </div>
            </div>
           
          </>
        ) : (
          <h2 className="text-msg">
            Giỏ hàng của bạn không có gì. Mua ngay thôi!
          </h2>
        )
      ) : (
        <h2 className="text-msg">
          Vui lòng đăng nhập để xem giỏ hàng bạn nhé!
        </h2>
      )}
    </div>
  );
}

export default Cart;
