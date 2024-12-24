import React, {useState} from "react";
import "../../styles/Main.scss";
const Banner = ({ text, image, pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const picturesArray = pictures || [];
  const hasAPicture = picturesArray.length > 0; 
  const hasMultiplePictures = picturesArray.length > 1; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`banner ${hasAPicture ? "carousel-active" : ""}`}>
      {text && <h1>{text}</h1>}
      <div className="carousel">

        <img
          src={hasAPicture ? pictures[currentIndex] : image} 
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${!hasAPicture ? "banner-static-image" : ""}`}
        />
    
        {hasMultiplePictures && (
          <>
            <button onClick={handlePrev} className="carousel-btn flèche-précédent">
              <img className="prev-arrow" src="../img/arrow_back_ios-24px 1.png" alt="Précédent" />
            </button>
            <button onClick={handleNext} className="carousel-btn flèche-suivant">
              <img className="forward-arrow" src="../img/arrow_forward_ios-24px 1.png" alt="Suivant" />
            </button>
          </>
        )}
        
        {hasMultiplePictures && (
          <div className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
