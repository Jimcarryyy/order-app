import { useState } from 'react';
import Burger from '../assets/Burger.png';
import GrandCafe from '../assets/Grand-cafe.png';
import '../css/restaurantList.css';
import RestaurantCard from './restaurantCard';

function RestaurantList() {
    const [activeCategory, setActiveCategory] = useState("Vegan");

    const menuItems = ["Vegan", "Sushi", "Pizza & Fast food", "Others"];

    const restaurants = {
        Vegan: [
            { image: Burger, discount: "-40%", category: "Restaurant", title: "Chef Burgers London" },
            { image: GrandCafe, discount: "-20%", category: "Restaurant", title: "Grand Ai Cafe London" },
            { image: Burger, discount: "-17%", category: "Restaurant", title: "Butterbrot Caf’e London" },
        ],
        Sushi: [
            { image: GrandCafe, discount: "-10%", category: "Restaurant", title: "Sushi World London" },
            { image: Burger, discount: "-15%", category: "Restaurant", title: "Tokyo Rolls Cafe" },
        ],
        "Pizza & Fast food": [
            { image: Burger, discount: "-30%", category: "Restaurant", title: "Fast Pizza London" },
            { image: GrandCafe, discount: "-25%", category: "Restaurant", title: "Italian Bites Cafe" },
            { image: Burger, discount: "-17%", category: "Restaurant", title: "Butterbrot Caf’e London" },
        ],
        Others: [
            { image: Burger, discount: "-5%", category: "Restaurant", title: "Other Foods London" },
        ]
    };

    return (
        <div className="resto-banner">
            <div className="deals">
                <h2 style={{ fontSize: '32px', fontWeight: '600'}}>Up to -40% 🎊 Order.uk exclusive deals</h2>
                <div className="menu">
                    <nav>
                        <ul>
                            {menuItems.map((menu, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setActiveCategory(menu)}
                                        className={activeCategory === menu ? 'active' : ''}
                                        style={{
                                        border: activeCategory === menu ? `1px solid #FC8A06` : 'none',
                                        color: activeCategory === menu ? '#FC8A06' : 'black',
                                        background: 'transparent',
                                        padding: '10px 20px',
                                        borderRadius: '30px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                        }}

                                    >
                                        {menu}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="restaurant-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {restaurants[activeCategory].map((resto, idx) => (
                    <RestaurantCard
                        key={idx}
                        image={resto.image}
                        discount={resto.discount}
                        category={resto.category}
                        title={resto.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantList;
