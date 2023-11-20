import footerLogo from '../assets/images/logo-white.svg';
import telIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img className='footer-logo' src={footerLogo} alt="white logo" />
            </div>
            <div className="container">

                <div className="footer-1">

                    <p><img src={telIcon} alt="telephone icon" /> Phone: +1-543-123-4567</p>
                    <p><img src={emailIcon} alt="email icon" /> example@fylo.com</p>
                </div>
                <div className="footer-2">
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-3">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="footer-4">
                    <a href="#" >  <FaFacebookF /></a >
                    <a href="#"> <FaTwitter /></a>
                    <a href="#"> <FaInstagram /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer