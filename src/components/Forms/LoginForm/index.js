import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.scss";
import { Link, NavLink } from "react-router-dom";
import { faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { login } from "./userSlice";

function LoginForm({ onClickClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState("");
  const [inputType, setInputType] = useState("password")
  const dispatch = useDispatch();

  const validate = () => {
    const msg = {};
    //mail
    if (email.trim() === "") {
      msg.emailInput = "*Please enter your email";
    }
    // password
    if (password.trim() === "") {
      msg.passwordInput = "*Please enter your password";
    }
    setErrorMsg(msg);
    return !Object.keys(msg).length > 0;
  };
  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(
        "https://ecommerce-firebase-f716f-default-rtdb.firebaseio.com/userData.json"
      );
      setUserData(await res.json());
    };
    getUserData();
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const isValidate = validate();
    console.log(isValidate);
    if (isValidate) {
      const arrUserData = Object.keys(userData).map((key) => ({
        key,
        value: userData[key],
      }));
      const data = { email, password };
      const existingAccount = arrUserData.filter(
        (acc) =>
          acc.value.email === data.email && acc.value.password === data.password
      );

      if (existingAccount.length === 1) {
        alertify.set("notifier", "position", "top-center");
        alertify.set("notifier", "delay", 4);
        alertify.success("Đăng nhập thành công!");
        const [currentAccount] = existingAccount;
        console.log(existingAccount);
        dispatch(login(currentAccount));
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ user: currentAccount, login: true })
        );
        onClickClose();
      } else {
        alertify.set("notifier", "position", "top-center");
        alertify.set("notifier", "delay", 4);
        alertify.error("Vui lòng thử lại!");
      }
    } else return;
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
            <div className="input__login">
              <FontAwesomeIcon className="form__input__icon" icon={faUser} />
              <input
                className="form__email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                   }}
                type="email"
                placeholder="Nhập địa chỉ email"
              />
            </div>
            <p className="form__msg">{email === '' && errorMsg.emailInput}</p>
          </div>
         <div className="form__input">
            <div className="input__login">
              <FontAwesomeIcon onClick={() => {
                setInputType(inputType === 'password' ? 'text' : 'password')
              }} className="form__input__icon" icon={inputType === 'password' ? faEyeSlash : faEye} /> 
              <input
                className="form__password"
                value={password}
                type={inputType}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Nhập mật khẩu"
              />
              
            </div>
            <p className="form__msg">{password === '' && errorMsg.passwordInput}</p>
         </div>
          <button type="submit" className="form__btn">
            Đăng nhập
          </button>
        </form>
        <div className="login_auth">
          <span>Chưa có tài khoản? </span>
          <Link to="/register" onClick={onClickClose} className="register_link">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
