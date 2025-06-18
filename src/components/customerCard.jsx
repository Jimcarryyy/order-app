import TimeSpan from '../assets/timespan.png';
import Stars from '../assets/stars.png';
import '../css/restaurant.css';

function CustomerCard({profImage, name, place, date, review}) {
    return (
        <div className="customer-con">
            <div className="con-1">
                <div className="hero-1">
                    <img src={profImage} alt="Profile Image" />
                    <div className="prof-info">
                        <h3>{name}</h3>
                        <p>{place}</p>
                    </div>
                </div>
                <div className="hero-2">
                    <img src={Stars} alt="Ratings Image" />
                    <div className="date-info">
                        <img src={TimeSpan} alt="Time span image" />
                        <p>{date}</p>
                    </div>
                </div>
            </div>
            <div className="con-2">
                <p>{review}</p>
            </div>
        </div>
    )
}

export default CustomerCard