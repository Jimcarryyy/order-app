import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import '../css/pages.css';

function Login() {
    const [mode, setMode] = useState('login');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="page-hero">
                <p>Welcome to Order.uk</p>
                <h1>Login / <span>Sign Up</span></h1>
                <p>Create an account to track orders, save favourites, and get exclusive deals delivered to your inbox.</p>
            </div>

            <div className="auth-con">
                <div className="auth-card">
                    <h1>{mode === 'login' ? 'Welcome back' : 'Create account'}</h1>
                    <p>{mode === 'login' ? 'Sign in to continue ordering' : 'Join thousands of happy customers across the UK'}</p>

                    <div className="auth-tabs">
                        <button
                            type="button"
                            className={mode === 'login' ? 'active' : ''}
                            onClick={() => setMode('login')}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className={mode === 'signup' ? 'active' : ''}
                            onClick={() => setMode('signup')}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {mode === 'signup' && (
                            <div className="auth-field">
                                <label htmlFor="name">Full Name</label>
                                <input id="name" type="text" placeholder="John Smith" />
                            </div>
                        )}
                        <div className="auth-field">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" placeholder="youremail@gmail.com" />
                        </div>
                        <div className="auth-field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        {mode === 'signup' && (
                            <div className="auth-field">
                                <label htmlFor="postcode">Delivery Postcode</label>
                                <input id="postcode" type="text" placeholder="e.g. EC4R 3TE" />
                            </div>
                        )}
                        <button type="submit" className="auth-submit">
                            {mode === 'login' ? 'Login' : 'Create Account'}
                        </button>
                    </form>

                    <div className="auth-divider">or continue with</div>

                    <div className="auth-social">
                        <button type="button">Google</button>
                        <button type="button">Apple</button>
                    </div>
                </div>

                <div className="auth-side">
                    <div className="auth-side-card">
                        <h3>🎊 First order discount</h3>
                        <p>Get 5% off your first order with promo code <strong>ORDER5</strong> at checkout.</p>
                        <Link to="/specialoffers">View all offers →</Link>
                    </div>
                    <div className="auth-side-card">
                        <h3>Partner with us</h3>
                        <p>Own a restaurant? Sign up as a business and earn more with lower fees.</p>
                        <Link to="/">Learn more →</Link>
                    </div>
                    <div className="auth-side-card">
                        <h3>Ride with us</h3>
                        <p>Become a delivery rider and avail exclusive perks. Flexible hours, great earnings.</p>
                        <Link to="/">Get started →</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Login;
