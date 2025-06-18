import RestoHome from '../assets/restohome.png';
import RestoHomeBg from '../assets/restohomebg.png';
import '../css/restaurant.css';
import RestoHomeCard from '../components/restaurantHomeCard';

function RestaurantHome(){
    return(
        <div className="restaurant-main">
            <RestoHomeCard
                restoBg={RestoHomeBg}
                desc={"I'm lovin' it!"}
                header={"McDonald's East London"}
                minOrder={"Minimum Order: 12 GBP"}
                minTime={"Delivery in 20-25 Minutes"}
                openTime={"Open until 3:00 AM"}
                restoHome={RestoHome}
            />
        </div>
    )
}

export default RestaurantHome