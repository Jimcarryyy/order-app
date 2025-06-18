import Tracking from '../assets/Tracking-2.png';
import ID from '../assets/ID Verified.png';
import Clock from '../assets/Clock.png';
import '../css/index.css';

function DeliveryInfo() {
    return (
        <div className="deliveryInfo">
            <div className="first-container">
                <div className="delivery">
                    <img src={Tracking} alt="Tracking Image" />
                    <h2>Delivery information</h2>
                </div>
                <div className="days-con">
                    <p><span>Monday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
                    <p><span>Tuesday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Wednesday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Thursday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Friday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Saturday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Sunday: </span>8:00 AM–12:00 AM</p>
                    <p><span>Estimated time until delivery: </span>20 min</p>
                </div>
            </div>
            <div className="second-container">
                <div className="contact-info">
                    <img src={ID} alt="ID Verified" />
                    <h2>Contact information</h2>
                </div>
                <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
                <p>Phone number</p>
                <p>+934443-43</p>
                <p>Website</p>
                <p>https://mcdonalds.uk/</p>
            </div>
            <div className="third-container">
                <div className="operational">
                    <img src={Clock} alt="" />
                    <h2>Operational Times</h2>
                </div>
                <div className="days-con">
                    <p><span>Monday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Tuesday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Wednesday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Thursday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Friday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Saturday: </span>8:00 AM–3:00 AM</p>
                    <p><span>Sunday: </span>8:00 AM–3:00 AM</p>
                </div>
            </div>
        </div>
    )
}

export default DeliveryInfo