import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrums from "../../components/Breadcrums";

import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { decrement, deleteProduct, increment, inputQuantity } from "./cartSlice";
function Cart() {
  const isLoggedIn = useSelector((state) => state.user.login);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  let total = 0;
  return (
    <div className="cart__wrapper">
      <Breadcrums />
      {isLoggedIn ? (
        cartItems.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Xóa</th>
                <th>Sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                total +=item.price * item.quantity
                 return(
                <tr>
                  <td>
                    <button
                      className="item__action"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <FontAwesomeIcon className="action__btn" icon={faXmark} />
                    </button>
                  </td>
                  <td>
                    <div className="item__wrapper">
                      <div className="item__img">
                        <img src={item.image} />
                      </div>
                      <div className="item__title">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <div className="product__desc__quantity">
                      <button onClick={()=> dispatch(increment(item))}>+</button>
                      <input   value={item.quantity} />
                      <button onClick={()=> dispatch(decrement(item))}>-</button>
                    </div>
                  </td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              )})}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} style={{ textAlign: "right" }}>
                  <strong>Total:</strong>
                </td>
                <td>{total} </td>
              </tr>
            </tfoot>
          </table>
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
