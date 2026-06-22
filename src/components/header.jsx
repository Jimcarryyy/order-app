import { Link, useLocation } from 'react-router-dom';
import User from '../assets/Male User.png';
import Logo from '../assets/Order-logo.png';
import PromoHeader from './promo-header';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/browsemenu', label: 'Browse menu' },
    { path: '/specialoffers', label: 'Special offers' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/trackorder', label: 'Track Order' },
];

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <div>
            <PromoHeader />
            <div className="header">
                <Link to="/">
                    <img src={Logo} alt="Order Logo Image" />
                </Link>
                <nav>
                    <ul>
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={isActive(path) ? 'active' : ''}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
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
