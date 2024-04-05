import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faFacebookF,
    faFacebookSquare,
    faInstagram,
    faInstagramSquare,
    faPinterestP,
    faPinterestSquare,
    faTiktok,
    faTwitter,
    faTwitterSquare,
    faYoutube,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return ( <div className='footer_wrapper'>
        <div className='footer__container'>
            <h1 className='footer__logo'>My Logo</h1>
           
            <div className='footer_row'>
                <p className='footer__title'>Mua sắm</p>
                <ul className='row__list'>
                    <li><a href=''>Thanh toán</a></li>
                    <li><a href=''>Giao hàng</a></li>
                    <li><a href=''>Trả hàng</a></li>
                    <li><a href=''>Cửa hàng</a></li>
                    <li><a href=''>Magazine</a></li>
                </ul>
            </div>
            <div className='footer_row'>
                <p className='footer__title'>Trợ giúp</p>
                <ul className='row__list'>
                    <li><a href=''>Tài khoản của tôi</a></li>
                    <li><a href=''>Dịch vụ khách hàng</a></li>
                    <li><a href=''>Liên hệ</a></li>
                    <li><a href=''>Bảo mật</a></li>
                    <li><a href=''>Cookies</a></li>
                    <li><a href=''>Các điều khoản và điều kiện</a></li>
                </ul>
            </div>

            <div className='footer__social'>
                <FontAwesomeIcon className='footer__icon' icon={faFacebookSquare} />
                <FontAwesomeIcon className='footer__icon' icon={faInstagramSquare} />
                <FontAwesomeIcon className='footer__icon' icon={faTwitterSquare} />
                <FontAwesomeIcon className='footer__icon' icon={faPinterestSquare} />
                <FontAwesomeIcon className='footer__icon' icon={faTiktok} />
            </div>

            <p className='footer__copyright'>
                <span>Made by ThuAnhPhan</span>
            </p>
        </div>
    </div>  );
}

export default Footer;