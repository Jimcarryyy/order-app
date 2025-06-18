import { useState } from 'react';
import AtmCard from '../assets/atmcard.png';
import CashOnDelivery from '../assets/cashdev.png';
import Contact from '../assets/contact.png';
import DigitalWallet from '../assets/digitalwallet.png';
import ETA from '../assets/eta.png';
import Food from '../assets/food 1.png';
import FutureExpansion from '../assets/futureexpansion.png';
import LocationCheck from '../assets/locationcheck.png';
import Loyalty from '../assets/loyalty.png';
import Order from '../assets/order 1.png';
import OrderFood from '../assets/order-food 1.png';
import Promo from '../assets/promocode.png';
import Season from '../assets/seasonaloffers.png';
import Service from '../assets/service.png';
import Tracking from '../assets/tracking.png';
import FaqsCard from '../components/faqsCard';
import '../css/index.css';

// Our full FAQs data structure
const faqsData = [
  {
    question: "How does Order.UK work?",
    cards: [
      { title: "Place an Order", image: OrderFood, description: "Place order through our website or Mobile app" },
      { title: "Track Progress", image: Food, description: "You can track your order status with delivery time" },
      { title: "Get your Order", image: Order, description: "Receive your order at a lighting fast speed" }
    ],
    description: "Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!"
  },

  {
    question: "What payment methods are accepted?",
    cards: [
      { title: "Credit/Debit Cards", image: AtmCard, description: "We accept all major credit and debit cards." },
      { title: "Digital Wallets", image: DigitalWallet, description: "Pay conveniently using Google Pay, Apple Pay, and more." },
      { title: "Cash on Delivery", image: CashOnDelivery, description: "You can pay with cash once your order arrives." }
    ],
    description: "We offer multiple secure payment methods including cards, wallets, and cash on delivery for your convenience."
  },

  {
    question: "Can I track my order in real-time?",
    cards: [
      { title: "Live Tracking", image: Tracking, description: "View real-time order progress." },
      { title: "ETA Updates", image: ETA, description: "Receive notifications on estimated delivery time." },
      { title: "Delivery Contact", image: Contact, description: "Easily contact your delivery rider anytime." }
    ],
    description: "Yes! With our live tracking system, you can monitor your order’s journey from the restaurant to your doorstep."
  },

  {
    question: "Are there any special discounts or promotions available?",
    cards: [
      { title: "Promo Codes", image: Promo, description: "Use special promo codes for instant discounts." },
      { title: "Seasonal Offers", image: Season, description: "Enjoy seasonal and holiday special deals." },
      { title: "Loyalty Rewards", image: Loyalty, description: "Earn points every time you order." }
    ],
    description: "We frequently run promotions and loyalty programs so you can save more while enjoying great food."
  },

  {
    question: "Is Order.UK available in my area?",
    cards: [
      { title: "Service Areas", image: Service, description: "We are available in major cities" },
      { title: "Location Check", image: LocationCheck, description: "Use our app to check service availability" },
      { title: "Future Expansion", image: FutureExpansion, description: "We aim to reach every customer, stay tuned!" }
    ],
    description: "Check your location via our app or website to see if we're already delivering to your area."
  }
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFaq = faqsData[activeIndex];

  return (
    <div className="faqs-con">
      <div className="faqs-con-1">
        {faqsData.map((faq, index) => (
          <button
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {faq.question}
          </button>
        ))}
      </div>

      <div className="faqs-con-2">
        <div className="faqs-cards">
          <FaqsCard data={activeFaq.cards} />
        </div>
        <div className="desc-f">
          <p>{activeFaq.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
