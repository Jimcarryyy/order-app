import { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../assets/Male User.png';
import Logo from '../assets/Order-logo.png';
import PromoHeader from './promo-header';

function Header() {
    const [active, setActive] = useState("Home");

    const handleClick = (menuName) => {
        setActive(menuName);
    };

    return (
        <div>
            <PromoHeader />
            <div className="header">
                <img src={Logo} alt="Order Logo Image" />
                <nav>
                    <ul>
                        <li><Link to="/" className={active === "Home" ? 'active' : ''} onClick={() => handleClick("Home")}>Home</Link></li>
                        <li><Link to="/browsemenu" className={active === "Browse menu" ? 'active' : ''} onClick={() => handleClick("Browse Menu")}>Browse menu</Link></li>
                        <li><Link to="/specialoffers" className={active === "Special offers" ? 'active' : ''} onClick={() => handleClick("Special offers")}>Special offers</Link></li>
                        <li><Link to="/restaurants" className={active === "Restaurant" ? 'active' : ''} onClick={() => handleClick("Restaurant")}>Restaurants</Link></li>
                        <li><Link to="/trackOrder" className={active === "TrackOrder" ? 'active' : ''} onClick={() => handleClick("TrackOrder")}>Track Order</Link></li>
                    </ul>
                </nav>
                <button>
                    <Link to="/login">
                        <img src={User} alt="Login Image" />
                        Login/Signup
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Header;
