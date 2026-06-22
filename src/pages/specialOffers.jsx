import FirstDisc from '../assets/disc-image-1.png';
import SecondDisc from '../assets/disc-image-2.png';
import ThirdDisc from '../assets/disc-image-3.png';
import DiscountCard from '../components/discountCard';
import Footer from '../components/footer';
import RestaurantList from '../components/restaurantList';
import '../css/pages.css';
import '../css/restaurant.css';

function SpecialOffers() {
    return (
        <div className="offers-page">
            <div className="page-hero">
                <p>Limited time only</p>
                <h1>Special <span>Offers</span></h1>
                <p>Save big on your favourite restaurants. Exclusive discounts up to 40% — only on Order.uk.</p>
            </div>

            <div className="discount-banner">
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

            <RestaurantList />
            <Footer />
        </div>
    );
}

export default SpecialOffers;
