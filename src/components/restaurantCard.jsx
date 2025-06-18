import '../css/restaurantCard.css';

function RestaurantCard({ image, discount, category, title }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={title} className="card-image" />
      <div className="gradient-overlay"></div>
      <div className="discount-badge">{discount}</div>
      <div className="card-content">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
}

export default RestaurantCard;
