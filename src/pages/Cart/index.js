import './Cart.scss'
import {useSelector} from 'react-redux';
function Cart() {
    const isLoggedIn = useSelector(state => state.user.login)
    return ( 
        <div className='cart__wrapper'>
            {isLoggedIn ? (<h2 className='text-msg'>Giỏ hàng của bạn chưa có gì. Mua ngay thôi!</h2>) : <h2 className='text-msg'>Vui lòng đăng nhập để xem giỏ hàng bạn nhé!</h2>}
        </div>
     );
}

export default Cart;