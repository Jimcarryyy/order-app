import '../css/popularCard.css';

function PopularCard( { image, category, numOfRes } ) {
    return (
        <div className="popular-con">
            <img src={image} alt="Image" />
            <div className="popular-desc">
                <p>{category}</p>
                <span>{numOfRes}</span>
            </div>
        </div>
    )
}

export default PopularCard