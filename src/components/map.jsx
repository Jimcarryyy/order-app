import '../css/restaurant.css';

function Map() {
  return (
    <div style={{ width: "80%", height: "400px", margin: "50px auto" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79573.38326669559!2d-0.2776043027343796!3d51.445886600000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876043bce4bc6a9%3A0xf56153b69058f0da!2sMcDonald&#39;s!5e0!3m2!1sen!2sph!4v1750065637788!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default Map;
