import Breakfast from '../assets/Breakfast.png';
import BurgerPlate from '../assets/burgerplate.png';
import Pasta from '../assets/Pasta.png';
import Pizza from '../assets/Pizza.png';
import Salads from '../assets/Salads.png';
import Soups from '../assets/Soups.png';
import '../css/popularCard.css';
import PopularCard from './popularCard';

function Populars() {
    return (
        <div className="pop-cons">
            <h2>Order.uk Popular Categories 🤩</h2>
            <div className="popular-banner">
                <PopularCard
                    image={BurgerPlate}
                    category={"Burgers & Fast food"}
                    numOfRes={"21 Restaurants"}
                />
                <PopularCard
                    image={Salads}
                    category={"Salads"}
                    numOfRes={"32 Restaurants"}
                />
                <PopularCard
                    image={Pasta}
                    category={"Pasta & Casuals"}
                    numOfRes={"4 Restaurants"}
                />
                <PopularCard
                    image={Pizza}
                    category={"Pizza"}
                    numOfRes={"32 Restaurants"}
                />
                <PopularCard
                    image={Breakfast}
                    category={"Breakfast"}
                    numOfRes={"4 Restaurants"}
                />
                <PopularCard
                    image={Soups}
                    category={"Soups"}
                    numOfRes={"32 Restaurants"}
                />
            </div>
        </div>
    )
}

export default Populars