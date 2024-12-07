import React from "react";
import "../styles/banner.css"
const Banner = ({ text, image }) => {
  return (
    <div className="banner">
      {text && <h1>{text}</h1>}
      <img src={image} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
