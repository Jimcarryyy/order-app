import chefImage from '../assets/partnerwithus.png';
import deliveryImage from '../assets/ridewithus.png';
import '../css/partnerCard.css';
import PartnerCard from './partnerCard';

function Partner() {
  return (
    <div className="main">
        <div className="partner-row">
        <PartnerCard
            backgroundImage={chefImage}
            badgeText="Earn more with lower fees"
            subtitle="Signup as a business"
            title="Partner with us"
            buttonText="Get Started"
            onButtonClick={() => alert('Chef Card Clicked')}
        />

        <PartnerCard
            backgroundImage={deliveryImage}
            badgeText="Avail exclusive perks"
            subtitle="Signup as a rider"
            title="Ride with us"
            buttonText="Get Started"
            onButtonClick={() => alert('Driver Card Clicked')}
        />
        </div>
    </div>
  );
}

export default Partner;
