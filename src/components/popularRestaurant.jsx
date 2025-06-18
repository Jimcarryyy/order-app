import BurgerKing from '../assets/burgerking.png';
import Kfc from '../assets/kfc.png';
import MCDO from '../assets/mcdo.png';
import PapaJohns from '../assets/papajohns.png';
import Shawarma from '../assets/shawarma.png';
import TexasChicken from '../assets/texaschicken.png';
import PopularCard from './popularResCard';
import '../css/popularCard.css';

function PopularRestaurant() {
    return (
        <div className="pop-restaurant">
            <h2>Popular Restaurants</h2>
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
    )
}

export default PopularRestaurant