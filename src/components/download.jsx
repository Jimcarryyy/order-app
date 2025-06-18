import Appstore from '../assets/Appstore.png';
import Chatting from '../assets/Chatting.png';
import OrderLogo from '../assets/Order-logo.png';
import '../css/index.css';

function Download(){
    return (
        <div className="download-con">
            <div className="d-con-1">
                <img src={ Chatting } alt="Chatting Image" />
            </div>
            <div className="d-con-2">
                <div className="order-desc">
                    <img src={ OrderLogo } alt="Order logo Image" />
                    <p>ing is more</p>
                </div>
                <div className="pers-con">
                    <h1><span>Personalised</span> & Instant</h1>
                </div>
                <div className="down-con">
                    <p>Download the Order.uk app for faster ordering</p>
                    <img src={ Appstore } alt="Appstore Image" />
                </div>
            </div>
        </div>
    )
}

export default Download