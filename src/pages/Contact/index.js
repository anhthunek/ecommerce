import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import {
  faAddressBook,
  faAddressCard,
  faLocation,
  faLocationDot,
  faMailBulk,
  faMailReply,
  faMap,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contact__wrapper">
      <h1>Liên hệ với chúng tôi</h1>
      <div className="contact__info">
        <div className="contact__info__col">
          <h4>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            Địa chỉ
          </h4>
          <span>Tam Binh, Thu Duc, Ho Chi Minh</span>
        </div>
        <div className="contact__info__col">
          <h4>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> Điện thoại
          </h4>
          <span>+84963449773</span>
        </div>
        <div className="contact__info__col">
          <h4>
            {" "}
            <FontAwesomeIcon icon={faMailBulk} /> Email
          </h4>
          <span>imcatee0@gmail.com</span>
        </div>
      </div>
      <form className="contact__form">
        <div className="form__input">
          <div className="input__area">
            <label className="form__label">Tên</label>
            <input placeholder="Nhập tên " />
          </div>
        </div>
        <div className="form__input">
          <div className="input__area">
            <label className="form__label">Điện thoại</label>
            <input placeholder="Nhập điện thoại " />
          </div>
        </div>
        <div className="form__input">
          <div className="input__area">
            <label className="form__label">Email</label>
            <input placeholder="Nhập email " />
          </div>
        </div>
        <div className="form__input">
        <div className="input__area">
            <label className="form__label">Message</label>
              <textarea rows='10' type="text" placeholder="Nhập tin nhắn"></textarea>
        </div>
        </div>
        <button type="submit" className="form__btn"> 
          Gửi
        </button>
      </form>
    </div>
  );
}

export default Contact;
