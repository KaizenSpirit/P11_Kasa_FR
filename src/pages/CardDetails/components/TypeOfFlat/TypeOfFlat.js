import React from "react";
import "../../../../styles/Main.scss";

const TypeOfFlat = ({title,location}) => {
  return (
      <div className="type-of-flat">
          <h2>{title}</h2>
          <p>{location}</p>
      </div>
  );
};

export default TypeOfFlat;