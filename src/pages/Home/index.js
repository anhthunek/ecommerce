import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__wrapper">
      <div className="home__container">
        <div className="home__input__area">
          <div className="home__input__container">
            <button className="home__input__btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input placeholder="Tìm kiếm sản phẩm" />
          </div>
        </div>
        <div className="home__img__area">
          <img
            src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_09/ladies/1509ac/1509AC-3x2-1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]"
            alt="home_img"
          />
        </div>
        <div className="home__banner__area">
          <p className="banner__text">
            Tận hưởng mùa hè mát mẻ với bộ sưu tập mới 2024
          </p>
          <Link className="banner__btn" to="/shop">
            Mua ngay
            <FontAwesomeIcon className="banner__icon" icon={faArrowRight} />
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
