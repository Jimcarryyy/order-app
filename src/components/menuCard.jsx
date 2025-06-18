import Plus from '../assets/Plus.png';
import '../css/index.css';

function menuCard({title, desc, gp, image}) {
    return (
        <div className="menucard-con">
            <div className="menucard-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <h4>{gp}</h4>
            </div>
            <div className="menucard-image">
                <img src={image} alt="Menu Image" />
                <img className='plus-icon' src={Plus} alt="Plus Icon" />
            </div>
        </div>
    )
}

export default menuCard