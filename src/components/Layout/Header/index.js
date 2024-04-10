import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark , faCaretSquareDown, faCartArrowDown, faSignIn} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "../../Forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from '../../Forms/LoginForm/userSlice'
import Account from "../../Account";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const isLoggedin = useSelector(state => state.user.login)

  const handleClickLogin = () => {
    setShowLogin(!showLogin)
  }
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="nav">
            <div>
              <button className="nav__mobile" onClick={()=> setShowMenu(!showMenu)}><FontAwesomeIcon className="nav__icon" icon={faBars} /></button>
              <NavLink className="nav__logo" to="/">
                My Logo
              </NavLink>
            </div>
            <div className="nav__menu__container">
              <NavLink className="nav__logo__mobile" to="/">
                My Logo
              </NavLink>
              <div className= {showMenu ? "nav__menu__area active" : "nav__menu__area"}  >
                <div className="nav__menu_sidebar">
                  <NavLink className="" to="/">
                    My Logo
                  </NavLink>
                  <button onClick={()=> setShowMenu(!showMenu)}><FontAwesomeIcon className="nav__icon" icon={faXmark} /></button>
                </div>
                <div onClick={()=> setShowMenu(!showMenu)} >
                  <ul>
                    <li className="nav__item">
                      <NavLink to="/" className="nav__link">
                        Trang chủ
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/products" className="nav__link">
                        Cửa hàng
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/about" className="nav__link">
                        Về chúng tôi
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/contact" className="nav__link">
                        Liên hệ
                      </NavLink>
                    </li>
                    <li className="nav__item">
                    <Link className="nav__cart__mobile" to='/cart'>Giỏ hàng <FontAwesomeIcon className="nav__icon" icon={faCartArrowDown} /></Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="nav__btns ">
             {isLoggedin ? (<Account/>) : (<button onClick={handleClickLogin}><span>Đăng nhập</span> <FontAwesomeIcon className="nav__icon" icon={faSignIn} /></button>)}
              <Link className="nav__cart" to='/cart'><FontAwesomeIcon className="nav__icon" icon={faCartArrowDown} /></Link>
            </div>
          </div>
        </div>
        
      </div>
      {showLogin && <Login onClickClose={handleClickLogin}/>}
   
    </>
  );
}

export default Header;
