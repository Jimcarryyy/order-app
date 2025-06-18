import '../css/index.css';

function FaqsCard({ data }) {
    return (
        <div className="faqscard-con">
            {data.map((item, idx) => (
                <div key={idx} className="faqscard-item">
                    <h4>{item.title}</h4>
                    <img src={item.image} alt="Image" />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FaqsCard;
