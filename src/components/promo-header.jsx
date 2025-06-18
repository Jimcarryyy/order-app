import Basket from '../assets/Basket.png';
import DownloadBtn from '../assets/Download-btn.png';
import Location from '../assets/Location.png';
import Star from '../assets/star.png';

function PromoHeader(){
    return(
        <div className="h-parent">
            <div className="h-child">
                <img src={ Star } alt="Star Image" />
                <h3>Get 5% Off your first order, <span><a href="#">Promo:ORDER5</a></span></h3>
            </div>
            <div className="h-child-2">
                <div className="h-sub">
                    <img src={ Location } alt="Location image" />
                    <h3>Regent Street, A4, A4201, London</h3>
                    <a href="#">Change Location</a>
                </div>
                <div className="h-sub-2">
                    <img className='Basket' src={ Basket } alt="Basket Image" />
                    <h3 className='Items'>23 Items</h3>
                    <h3>GBP <span>79.89</span></h3>
                    <img className='Download' src={ DownloadBtn } alt="Download Button Image" />
                </div>
            </div>
        </div>
    )
}

export default PromoHeader