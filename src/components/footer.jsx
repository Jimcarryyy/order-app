import '../css/index.css';
import Appstore from '../assets/Appstore.png';
import OrderLogo from '../assets/Order-logo-2.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Tiktok from '../assets/Tiktok.png';
import Snapchat from '../assets/Snapchat.png';

function Footer(){
    return(
        <div className="footer-con">
            <div className="first-con">
                <div className="order-cons">
                    <img src={ OrderLogo } alt="Order Logo" />
                    <img src={ Appstore } alt="Appstore" />
                    <p>Company # 490039-445, Registered with House of companies.</p>
                </div>
                <div className="links-con">
                    <div className="links-1">
                        <h3>Get Exclusive Deals in your Inbox</h3>
                        <div className="subscribe">
                            <input type="text" placeholder='youremail@gmail.com' />
                            <button>Subscribe</button>
                        </div>
                        <span>we wont spam, read our email policy</span>
                        <div className="soc-med-con">
                            <img src={ Facebook } alt="Image Icon" />
                            <img src={ Instagram } alt="Image Icon" />
                            <img src={ Tiktok } alt="Image Icon" />
                            <img src={ Snapchat } alt="Image Icon" />
                        </div>
                    </div>
                    <div className="links-2">
                        <h3>Legal Pages</h3>
                        <nav>
                            <ul>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">Modern Slavery Statement</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="links-3">
                        <h3>Important Links</h3>
                        <nav>
                            <ul>
                                <li><a href="#">Get help</a></li>
                                <li><a href="#">Add your restaurant</a></li>
                                <li><a href="#">Sign up to deliver</a></li>
                                <li><a href="#">Create a business account</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="second-con">
                <div className="copyright">
                    <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                </div>
                <div className="privacy">
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Pricing</p>
                    <p>Do not sell or share my personal information</p>
                </div>
            </div>
        </div>
    )
}

export default Footer