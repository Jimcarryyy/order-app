import Search from '../assets/Search.png';
import MenuImage from '../assets/menu-image.png';
import Fries from '../assets/fries.png';
import Drinks from '../assets/drinks.png';
import Footer from '../components/footer';
import MenuCard from '../components/menuCard';
import Populars from '../components/populars';
import '../css/pages.css';
import '../css/restaurant.css';

const menuCategories = ['All', 'Burgers', 'Fries', 'Snacks', 'Salads', 'Cold drinks', 'Desserts'];

const menuItems = [
    { title: 'Royal Cheese Burger with extra Fries', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10', image: MenuImage, category: 'Burgers' },
    { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10', image: MenuImage, category: 'Burgers' },
    { title: 'Double Cheese Burger Meal', desc: 'Double cheeseburger, medium fries and a cold drink of your choice', gp: 'GBP 12.50', image: MenuImage, category: 'Burgers' },
    { title: 'Crispy Fries Large', desc: 'Golden crispy fries, lightly salted and served hot', gp: 'GBP 3.20', image: Fries, category: 'Fries' },
    { title: 'Loaded Fries', desc: 'Crispy fries topped with cheese sauce and bacon bits', gp: 'GBP 5.40', image: Fries, category: 'Fries' },
    { title: 'Coca-Cola Medium', desc: 'Refreshing Coca-Cola served ice cold', gp: 'GBP 2.10', image: Drinks, category: 'Cold drinks' },
    { title: 'Sprite Medium', desc: 'Lemon-lime sparkling drink served ice cold', gp: 'GBP 2.10', image: Drinks, category: 'Cold drinks' },
    { title: 'Garden Side Salad', desc: 'Fresh mixed lettuce, tomato and cucumber with dressing', gp: 'GBP 4.50', image: MenuImage, category: 'Salads' },
];

function BrowseMenu() {
    return (
        <div>
            <div className="page-hero">
                <p>Explore our full menu</p>
                <h1>Browse <span>Menu</span></h1>
                <p>Discover burgers, fries, drinks and more from restaurants near you. Search by dish or browse by category.</p>
                <div className="search-con">
                    <input type="text" placeholder="Search dishes, restaurants..." />
                    <button>Search</button>
                </div>
            </div>

            <Populars />

            <div className="menu-hero-banner page-section">
                <div className="select-menu">
                    <div className="menu-desc">
                        <h2>All Menu Items</h2>
                        <div className="search-container">
                            <img src={Search} alt="Search" />
                            <input type="text" placeholder="Search from menu..." />
                        </div>
                    </div>
                    <div className="hero-menu">
                        {menuCategories.map((cat) => (
                            <button key={cat}>{cat}</button>
                        ))}
                    </div>
                </div>

                <div className="actual-menu">
                    <h1>Popular Dishes</h1>
                    <div className="menucard-banner">
                        {menuItems.map((item, index) => (
                            <MenuCard
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                gp={item.gp}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default BrowseMenu;
