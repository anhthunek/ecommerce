import { useEffect, useRef, useState } from "react";
import "./RegisterForm.scss";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState([]);
  const nameRef = useRef();

  const dispatch = useDispatch();

  const validate = () => {
    const msg = {};
    //name

    if (name.trim() === "") {
      msg.nameInput = "*Nhập họ tên";
      //   nameRef.current.focus();
    } else if (name.trim().split(" ").length < 2) {
      msg.nameInput = "*Nhập tên đầy đủ";
    }

    //mail
    const arr = Object.keys(userData).map((key) => ({
      key,
      value: userData[key],
    }));
    const arrName = arr.filter((x) => x.value.email === email);

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      msg.emailInput = "*Nhập email";
    } else if (!email.match(mailformat)) {
      msg.emailInput = "*Nhập địa chỉ email hợp lệ";
    } else if (arrName.length > 0) {
      msg.emailInput = "*Email đã tồn tại";
    }
    // password
    if (password.trim() === "") {
      msg.passwordInput = "*Nhập mật khẩu";
    } else if (password.trim().length < 8) {
      msg.passwordInput = "*Nhập ít nhất 8 ký tự";
    }
    // cfPassword
    if (cfPassword.trim() === "") {
      msg.cfPasswordInput = "*Xác nhận mật khẩu";
    } else if (cfPassword.trim() !== password.trim()) {
      msg.cfPasswordInput = "*Mật khẩu không chính xác";
    }

    setErrorMsg(msg);
    return !Object.keys(msg).length > 0;
  };
  useEffect(() => {
    const getDataUser = async () => {
      const response = await fetch(
        "https://ecommerce-firebase-f716f-default-rtdb.firebaseio.com/userData.json"
      );
      setUserData(await response.json());
    };
    getDataUser();
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const isValidate = validate();
    if (isValidate) {
      const userdata = { name, username: email, email, password };
      async function postData(url, data) {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        return response.json();
      }
      postData(
        "https://ecommerce-firebase-f716f-default-rtdb.firebaseio.com/userData.json",
        userdata
      );
      // dispatch(login(userdata));
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ user: userdata, login: true })
      );
      alertify.set("notifier", "position", "top-center");
      alertify.set("notifier", "delay", 4);
      alertify.success("Đăng ký thành công! Đăng nhập để tiếp tục.");
    } else return;
  };
  return (
    <div className="registerform__wrapper">
      <div className="registerform__container">
        <form className="register_form" onSubmit={handleRegisterSubmit}>
          <h2 className="form__title">Đăng ký</h2>
          <div className="form__input">
            <label className="form__label">Tên của bạn</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn"
            />
            <p className="form__msg">{errorMsg.nameInput}</p>
          </div>
          <div className="form__input">
            <label className="form__label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
            />
            <p className="form__msg">{errorMsg.emailInput}</p>
          </div>
          <div className="form__input">
            <label className="form__label">Mật khẩu</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Nhập mật khẩu"
            />
            <p className="form__msg">{errorMsg.passwordInput}</p>
          </div>
          <div className="form__input">
            <label className="form__label">Nhập lại mật khẩu</label>
            <input
              value={cfPassword}
              onChange={(e) => setCfPassword(e.target.value)}
              type="password"
              placeholder="Nhập mật khẩu"
            />
            <p className="form__msg">{errorMsg.cfPasswordInput}</p>
          </div>
          <button type="submit" className="form__btn">
            Tạo tài khoản
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
