import HomeImage from '../assets/Home-Image.png';
import Counts from '../components/counts';
import Download from '../components/download';
import Exclusive from '../components/exclusive';
import Faqs from '../components/faqs';
import Footer from '../components/footer';
import Partner from '../components/partner';
import PopularRestaurant from '../components/popularRestaurant';
import Populars from '../components/populars';

function Home(){
    return (
        <div className="container">
            <div className="home">
                <div className="desc-con">
                    <p>Order Restaurant food, takeaway and groceries.</p>
                    <h1>Feast Your Senses, <span className='Fast'>Fast and Fresh</span></h1>
                    <p className='Post'>Enter a postcode to see what we deliver</p>
                    <div className="search-con">
                        <input type="text" placeholder='e.g. EC4R 3TE' />
                        <button className='search-btn'>Search</button>
                    </div>
                </div>
                <div className="image-con">
                    <img src={ HomeImage } alt="Home Image" />
                </div>
            </div>
            <Exclusive />
            <Populars />
            <PopularRestaurant />
            <Download />
            <Partner />
            <Faqs />
            <Counts />
            <Footer />
        </div>
    )
}

export default Home