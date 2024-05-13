import { useSelector } from "react-redux";
import './Account.scss'
import Tippy from "@tippyjs/react";
import {useDispatch} from 'react-redux';
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAnglesDown, faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../Forms/LoginForm/userSlice";
import { Link } from "react-router-dom";
function Account({className}) {
    const dispatch = useDispatch ();
  const currentUser = useSelector((state) => state.user.user.value.name).split(' ');
  const handleClickLogOut = (e) => {
    e.preventDefault();
    dispatch(logout())
    localStorage.removeItem('currentUser')
  }
  return (
    <div className={className}>
      <HeadlessTippy
        offset={[0, 20]}
        interactive
        delay={[0, 200]}
        render={(attrs) => (
          <div className="acc__dropdown" tabIndex="-1" {...attrs}>
            <ul className="acc__dropdown__list">
              <li className="dropdown__item">
                <Link to="/account">Tài khoản của tôi</Link>
              </li>
              <li className="dropdown__item">
                <a href="" onClick={handleClickLogOut}>Log out</a>
              </li>
            </ul>
          </div>
        )}
      >
        <button className="acc_btn"><span>{currentUser[currentUser.length-1]}</span> <FontAwesomeIcon className="nav__icon" icon={faCaretDown} /> </button>
      </HeadlessTippy>
    </div>
  );
}

export default Account;
