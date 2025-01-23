import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandCard = React.forwardRef(({ land }, ref) => {
  const {
    images = [],
    title = "No title available",
    description = "No description available",
  } = land || {};

  return (
    <div className="land-card" ref={ref}>
      <div className="icon-container">
        <button className="icon-button love-button">❤️</button>
        <button className="icon-button share-button">🔗</button>
      </div>

      <Carousel showThumbs={false} infiniteLoop>
        {images.length > 0 ? (
          images.map((image, idx) => (
            <div key={idx}>
              <img src={image} alt={`Land Image ${idx}`} />
            </div>
          ))
        ) : (
          <div>
            <img src="default-image.jpg" alt="Default Image" />
          </div>
        )}
      </Carousel>
      <div className="land-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
});

LandCard.displayName = "LandCard";

LandCard.propTypes = {
  land: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandCard;
