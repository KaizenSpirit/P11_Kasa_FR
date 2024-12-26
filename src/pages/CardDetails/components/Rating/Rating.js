import React from "react";
import "../../../../styles/Main.scss";

const Rating = ({rating}) => {
  return (
    <div className="tags-and-rating">
      <div className="rating">
        {Array(5)
          .fill()
          .map((_, index) => (
            <img
              key={index}
              src={index < rating ? "/img/star_rating.png" : "/img/star_base.png"}
              alt={`Étoile ${index + 1}`}
              className="star"
            />
          ))}
      </div>
    </div>
  );
};

export default Rating;