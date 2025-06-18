import BurgerKing from '../assets/burgerking.png';
import Kfc from '../assets/kfc.png';
import MCDO from '../assets/mcdo.png';
import PapaJohns from '../assets/papajohns.png';
import Shawarma from '../assets/shawarma.png';
import TexasChicken from '../assets/texaschicken.png';
import CustomerReviews from '../components/customerReviews';
import DeliveryInfo from '../components/deliveryInfo';
import Footer from '../components/footer';
import Map from '../components/map';
import PopularCard from '../components/popularResCard';
import '../css/popularCard.css';
import '../css/restaurant.css';
import RestoHome from '../components/restaurantHome';
import Menu from '../components/menu';

function Restaurants() {
    return (
        <div className="restaurant-main">
        
        <RestoHome />
        <Menu />
        <DeliveryInfo />
        <Map />
        <CustomerReviews />
        <div className="similar-resto">
            <h2>Similar Restaurants</h2>
            <div className="resto-con">
                <PopularCard 
                    image={MCDO}
                    restaurantName={"McDonald’s London"}
                />
                <PopularCard 
                    image={PapaJohns}
                    restaurantName={"Papa Johns"}
                />
                <PopularCard 
                    image={Kfc}
                    restaurantName={"KFC West London"}
                />
                <PopularCard 
                    image={TexasChicken}
                    restaurantName={"Texas Chicken"}
                />
                <PopularCard 
                    image={BurgerKing}
                    restaurantName={"Burger King"}
                />
                <PopularCard 
                    image={Shawarma}
                    restaurantName={"Shaurma 1"}
                />
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Restaurants