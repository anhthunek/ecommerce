import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.scss";
import { Link, NavLink } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../../../redux/actions";
import { takeLogin } from "../../../redux/selectors";

function LoginForm({onClickClose}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const login = useSelector(takeLogin);

  
  const validate = () => {
    const msg = {};
    //mail
    if (email.trim() === '') {
        msg.emailInput = '*Please enter your email';
    }
    // password
    if (password.trim() === '') {
        msg.passwordInput = '*Please enter your password';
    }
    setErrorMsg(msg);
    return !Object.keys(msg).length > 0;
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const isValidate = validate();
  if (isValidate) {
      
  }
};
  return (
    <div className="login__wrapper">
      <div className="login__overlay" onClick={onClickClose}></div>
      <div className="login__container">
        <form className="form__login" onSubmit={handleLoginSubmit}>
          <button className="form__close" onClick={onClickClose}>
            <FontAwesomeIcon className="form__icon" icon={faXmark} />
          </button>
          <h2 className="form__title">Đăng nhập</h2>
          <div className="form__input">
            <FontAwesomeIcon className="form__input__icon" icon={faUser} />
            <input  className="form__email" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Nhập địa chỉ email" />
            <p className='form__msg'>{errorMsg.emailInput}</p>
          </div>
          <div className="form__input">
            <FontAwesomeIcon className="form__input__icon" icon={faEyeSlash} />
            <input className="form__password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu" />
            <p className='form__msg'>{errorMsg.passwordInput}</p>
          </div>
          <a href="#" className="form__forgot">
            Bạn quên mật khẩu à?
          </a>
          <button type="submit" className="form__btn">Đăng nhập</button>
        </form>
        <div className="login_auth">
          <span>Chưa có tài khoản? </span>
          <Link to='/register' onClick={onClickClose} className="register_link">
            Đăng ký
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
