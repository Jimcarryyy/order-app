import '../css/popularCard.css';

function PopularResCard({ image, restaurantName }) {
    return (
        <div className="pop-res-con">
            <img src={image} alt="Resto Images" />
            <p>{restaurantName}</p>
        </div>
    )
}

export default PopularResCard