import { useState } from 'react';
import CustomerCard from '../components/customerCard';
import ProfPic from '../assets/profpic.png';
import BackArrow from '../assets/Back.png';
import BackArrow2 from '../assets/Back-2.png';
import '../css/restaurant.css';
import Ratings from '../assets/ratings.png';

function CustomerReviews() {
    const reviews = [
        {
            profImage: ProfPic,
            name: "St Glx",
            place: "South London",
            date: "24th September, 2023",
            review: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard - hot and satisfying."
        },
        {
            profImage: ProfPic,
            name: "Jane Doe",
            place: "North London",
            date: "1st October, 2023",
            review: "Very satisfied with the delivery speed and the packaging quality."
        },
        {
            profImage: ProfPic,
            name: "Mark Smith",
            place: "East London",
            date: "5th October, 2023",
            review: "Easy ordering process and fresh food as always."
        },
        {
            profImage: ProfPic,
            name: "Lisa Ray",
            place: "West London",
            date: "10th October, 2023",
            review: "Loved the customer service, very responsive staff."
        },
        {
            profImage: ProfPic,
            name: "Daniel John",
            place: "Central London",
            date: "15th October, 2023",
            review: "Excellent experience, definitely ordering again."
        },
        {
            profImage: ProfPic,
            name: "Chris Evans",
            place: "South East London",
            date: "20th October, 2023",
            review: "Smooth process from order to delivery."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const handleNext = () => {
        if (currentIndex + cardsPerPage < reviews.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const currentReviews = reviews.slice(currentIndex, currentIndex + cardsPerPage);

    return (
        <div className="customer-banner">
            <div className="main-con">
                <div className="customer-nav">
                    <h1>Customer Reviews</h1>
                    <div className="nav-con">
                        <img src={BackArrow} alt="Back" onClick={handlePrev} style={{ cursor: "pointer" }} />
                        <img src={BackArrow2} alt="Next" onClick={handleNext} style={{ cursor: "pointer" }} />
                    </div>
                </div>

                <div className="customer-review">
                    {currentReviews.map((item, index) => (
                        <CustomerCard
                            key={index}
                            profImage={item.profImage}
                            name={item.name}
                            place={item.place}
                            date={item.date}
                            review={item.review}
                        />
                    ))}
                </div>
            </div>

            <div className="ratings-con">
                <img src={Ratings} alt="ratings image" />
            </div>
        </div>
    );
}

export default CustomerReviews;
