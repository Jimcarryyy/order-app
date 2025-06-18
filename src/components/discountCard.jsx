import '../css/restaurant.css';
import Plus from '../assets/Plus.png';

function DiscountCard({bgImage, desc, header, discount}) {
    return(
        <div className="discount-card" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat" }}>
            <div className="discount-con">
                <div className="disc">
                    <p>{discount}</p>
                </div>
            </div>
            <div className="description">
                <div className="disc-info">
                    <p>{desc}</p>
                    <h2>{header}</h2>
                </div>
                <img src={Plus} alt="Image" />
            </div>
        </div>
    )

}

export default DiscountCard