import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccountUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logout } from "../../components/Forms/LoginForm/userSlice";
function AccountUser() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.user.login)
  const userInfo= useSelector(state => {
    if (isLoggedIn) {
      return  {
        lastName: (state.user.user.value.name).split(' '),
        email: state.user.user.value.email,
        phone: state.user.user.value.phone,
        address: state.user.user.value.address,
        fullName: state.user.user.value.name
      }
    }
  })
  const handleClickLogOut = (e) => {
    e.preventDefault();
    dispatch(logout())
    localStorage.removeItem('currentUser')
  }
  return (
    <div className="account__wrapper">
      {
        isLoggedIn ? (
          <div className="account__container">
        <h1 className="account__title">
            Hi <span>{userInfo.lastName[userInfo.lastName.length-1]} !</span>
            <FontAwesomeIcon className="acc__icon" icon={faHeart} />
        </h1>
        <div className="account__details">
            <h2 className="account__details__title">
              Tài khoản của bạn
            </h2>
            <div className="account__details__area">
              <div className="account__details__col">
                <ul>
                  <li><Link to='/cart'>Giỏ hàng</Link></li>
                  <li><a href="" onClick={handleClickLogOut}>Đăng xuất</a></li>
                </ul>
              </div>
              <div className="account__details__col">
                <ul>
                  <li><a href=""><strong>Email:</strong> {userInfo.email}</a></li>
                  <li><a href=""><strong>Tên:</strong> {userInfo.fullName}</a></li>
                  <li><a href=""><strong>Số điện thoại:</strong> {userInfo.phone}</a></li>
                  <li><a href=""><strong>Địa chỉ:</strong> {userInfo.address}</a></li>
                  {/* <li><a href="">Đăng xuất</a></li> */}
                </ul>
              </div>
            </div>
        </div>
      </div>
        )
        : (<h1 className="text-msg">Đăng nhập để tiếp tục bạn nhé!</h1>)
      }
    </div>
  );
}

export default AccountUser;
