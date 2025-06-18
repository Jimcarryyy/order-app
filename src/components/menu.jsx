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

function Menu() {
    return(
        <div className="menu-hero-banner">

            <div className="menu-con">
                <div className="select-menu">
                    <div className="menu-desc">
                        <h2>All Offers from McDonald's East London</h2>
                        <div className="search-container">
                            <img src={Search} alt="Search Image" />
                            <input type="text" placeholder='Search from menu...' />
                        </div>
                    </div>
                    <div className="hero-menu">
                        <button>Offers</button>
                        <button>Burgers</button>
                        <button>Fries</button>
                        <button>Snacks</button>
                        <button>Salads</button>
                        <button>Cold drinks</button>
                        <button>Happy Meal</button>
                        <button>Desserts</button>
                        <button>Hot drinks</button>
                        <button>Sauces</button>
                        <button>Orbit</button>
                    </div>
                </div>
            </div>

            <div className="discount-banner">
                <DiscountCard
                    bgImage={FirstDisc}
                    desc={"McDonald’s East London"}
                    header={"First Order Discount"}
                    discount={"-20%"}
                />
                <DiscountCard
                    bgImage={SecondDisc}
                    desc={"McDonald’s East London"}
                    header={"Vegan Discount"}
                    discount={"-20%"}
                />
                <DiscountCard
                    bgImage={ThirdDisc}
                    desc={"McDonald’s East London"}
                    header={"Free ice Cream Offer"}
                    discount={"-100%"}
                />
            </div>

            <div className="actual-menu">
                <h1>Burgers</h1>
                <div className="menucard-banner">
                    <MenuCard 
                        title={"Royal Cheese Burger with extra Fries"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={MenuImage}
                    />
                </div>
                <h1 className='fries'>Fries</h1>
                <div className="menucard-banner">
                    <MenuCard 
                        title={"Royal Cheese Burger with extra Fries"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Fries}
                    />
                </div>
                <h1 className='fries'>Cold Drinks</h1>
                <div className="menucard-banner">
                    <MenuCard 
                        title={"Royal Cheese Burger with extra Fries"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                    <MenuCard 
                        title={"The classics for 3"}
                        desc={"1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"}
                        gp={"GBP 23.10"}
                        image={Drinks}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Menu