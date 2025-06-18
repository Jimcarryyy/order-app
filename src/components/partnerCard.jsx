import '../css/partnerCard.css';

const PartnerCard = ({
  backgroundImage,
  badgeText,
  subtitle,
  title,
  buttonText,
  onButtonClick
}) => {
  return (
    <div
      className="partner-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {badgeText && <div className="badge">{badgeText}</div>}

      <div className="content">
        {subtitle && <div className="subtitle">{subtitle}</div>}
        {title && <div className="title">{title}</div>}

        {buttonText && (
          <button className="btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
