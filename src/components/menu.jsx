import { useRef, useState } from 'react';
import FirstDisc from '../assets/disc-image-1.png';
import SecondDisc from '../assets/disc-image-2.png';
import ThirdDisc from '../assets/disc-image-3.png';
import Search from '../assets/Search.png';
import DiscountCard from '../components/discountCard';
import '../css/restaurant.css';
import MenuCard from '../components/menuCard';
import MenuImage from '../assets/menu-image.png';
import Fries from '../assets/fries.png';
import Drinks from '../assets/drinks.png';

const CATEGORIES = [
    'Offers',
    'Burgers',
    'Fries',
    'Snacks',
    'Salads',
    'Cold drinks',
    'Happy Meal',
    'Desserts',
    'Hot drinks',
    'Sauces',
    'Orbit',
];

const MENU_SECTIONS = [
    {
        id: 'burgers',
        title: 'Burgers',
        category: 'Burgers',
        image: MenuImage,
        items: [
            { title: 'Royal Cheese Burger with extra Fries', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
        ],
    },
    {
        id: 'fries',
        title: 'Fries',
        category: 'Fries',
        image: Fries,
        items: [
            { title: 'Royal Cheese Burger with extra Fries', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
        ],
    },
    {
        id: 'cold-drinks',
        title: 'Cold Drinks',
        category: 'Cold drinks',
        image: Drinks,
        items: [
            { title: 'Royal Cheese Burger with extra Fries', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium', gp: 'GBP 23.10' },
            { title: 'The classics for 3', desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks', gp: 'GBP 23.10' },
        ],
    },
];

function Menu() {
    const [activeCategory, setActiveCategory] = useState('All');
    const offersRef = useRef(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);

        if (category === 'Offers') {
            offersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        const section = MENU_SECTIONS.find((s) => s.category === category);
        if (section) {
            document.getElementById(`menu-${section.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const visibleSections =
        activeCategory === 'All' || activeCategory === 'Offers'
            ? MENU_SECTIONS
            : MENU_SECTIONS.filter((s) => s.category === activeCategory);

    const hasMenuContent = visibleSections.length > 0;
    const showEmptyState =
        activeCategory !== 'All' &&
        activeCategory !== 'Offers' &&
        !MENU_SECTIONS.some((s) => s.category === activeCategory);

    return (
        <div className="menu-hero-banner">
            <div className="menu-con">
                <div className="select-menu">
                    <div className="menu-desc">
                        <h2>All Offers from McDonald's East London</h2>
                        <div className="search-container">
                            <img src={Search} alt="Search" />
                            <input type="text" placeholder="Search from menu..." />
                        </div>
                    </div>
                    <div className="hero-menu-wrapper">
                        <div className="hero-menu" role="tablist">
                            <button
                                type="button"
                                className={activeCategory === 'All' ? 'active' : ''}
                                onClick={() => setActiveCategory('All')}
                            >
                                All
                            </button>
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    role="tab"
                                    className={activeCategory === category ? 'active' : ''}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {(activeCategory === 'All' || activeCategory === 'Offers') && (
                <div className="discount-banner" ref={offersRef} id="menu-offers">
                    <DiscountCard
                        bgImage={FirstDisc}
                        desc={"McDonald's East London"}
                        header="First Order Discount"
                        discount="-20%"
                    />
                    <DiscountCard
                        bgImage={SecondDisc}
                        desc={"McDonald's East London"}
                        header="Vegan Discount"
                        discount="-20%"
                    />
                    <DiscountCard
                        bgImage={ThirdDisc}
                        desc={"McDonald's East London"}
                        header="Free ice Cream Offer"
                        discount="-100%"
                    />
                </div>
            )}

            <div className="actual-menu">
                {hasMenuContent &&
                    visibleSections.map((section) => (
                        <div key={section.id} id={`menu-${section.id}`}>
                            <h1 className={section.id !== 'burgers' ? 'fries' : ''}>{section.title}</h1>
                            <div className="menucard-banner">
                                {section.items.map((item, index) => (
                                    <MenuCard
                                        key={`${section.id}-${index}`}
                                        title={item.title}
                                        desc={item.desc}
                                        gp={item.gp}
                                        image={section.image}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                {showEmptyState && (
                    <div className="menu-empty">
                        <h3>{activeCategory}</h3>
                        <p>No items available in this category yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Menu;
