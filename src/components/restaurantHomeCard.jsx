import Ratings from '../assets/ratings.png';
import '../css/restaurant.css';
import Motocross from '../assets/Motocross.png';
import OrderCompleted from '../assets/Order Completed.png';
import OpenTime from '../assets/Opentime.png';

function RestaurantHomeCard({restoBg, desc, header, minOrder, minTime, openTime, restoHome}){
    return(
        <div className="resto-home" style={{ backgroundImage: `url(${restoBg})` }}>
            <div className="hero-banner">
                <p>{desc}</p>
                <h1>{header}</h1>
                <div className="buttons-con">
                    <div className="first-btn">
                        <button>
                            <img src={OrderCompleted} alt="Image" />
                            <h3>{minOrder}</h3>
                        </button>
                    </div>
                    <div className="second-btn">
                        <button>
                            <img src={Motocross} alt="Image" />
                            <h3>{minTime}</h3>
                        </button>
                    </div>
                </div>
                <div className="open-time">
                    <img src={OpenTime} alt="Open time Image" />
                    <h3>{openTime}</h3>
                </div>
            </div>
            <div className="hero-banner-2">
                <img src={restoHome} alt="Resto home" />
                <img src={Ratings} alt="Ratings Image" className='ratings' />
            </div>
        </div>
    )
}

export default RestaurantHomeCard