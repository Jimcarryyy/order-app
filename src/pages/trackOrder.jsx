import { useState } from 'react';
import Footer from '../components/footer';
import '../css/pages.css';

const timelineSteps = [
    { label: 'Order Placed', desc: 'Your order has been confirmed', time: '12:04 PM' },
    { label: 'Preparing', desc: 'The restaurant is preparing your food', time: '12:12 PM' },
    { label: 'On the Way', desc: 'Your rider is heading to you', time: '12:28 PM' },
    { label: 'Delivered', desc: 'Enjoy your meal!', time: 'Estimated 12:45 PM' },
];

function TrackOrder() {
    const [orderId, setOrderId] = useState('ORD-UK-28491');
    const [activeStep, setActiveStep] = useState(2);

    const handleTrack = (e) => {
        e.preventDefault();
        setActiveStep(2);
    };

    return (
        <div>
            <div className="page-hero">
                <p>Real-time delivery updates</p>
                <h1>Track Your <span>Order</span></h1>
                <p>Enter your order ID below to see live status updates from the restaurant to your doorstep.</p>
            </div>

            <div className="track-order-con">
                <div className="track-form-card">
                    <h2>Find your order</h2>
                    <form onSubmit={handleTrack}>
                        <label htmlFor="order-id">Order ID</label>
                        <input
                            id="order-id"
                            type="text"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            placeholder="e.g. ORD-UK-28491"
                        />
                        <button type="submit">Track Order</button>
                    </form>
                </div>

                <div className="track-status-card">
                    <h2>Order Status</h2>

                    <div className="order-summary">
                        <div className="order-summary-info">
                            <h3>McDonald's East London</h3>
                            <p>Regent Street, A4, A4201, London</p>
                            <p>Order ID: {orderId}</p>
                        </div>
                        <div className="order-summary-total">
                            <h3>GBP 79.89</h3>
                            <p>23 Items</p>
                        </div>
                    </div>

                    <div className="track-timeline">
                        {timelineSteps.map((step, index) => {
                            const isCompleted = index < activeStep;
                            const isActive = index === activeStep;
                            const stepClass = isActive ? 'active' : isCompleted ? 'completed' : '';

                            return (
                                <div key={step.label} className={`timeline-step ${stepClass}`}>
                                    <div className="timeline-dot">
                                        {isCompleted ? '✓' : index + 1}
                                    </div>
                                    <div className="timeline-content">
                                        <h4>{step.label}</h4>
                                        <p>{step.desc} — {step.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TrackOrder;
