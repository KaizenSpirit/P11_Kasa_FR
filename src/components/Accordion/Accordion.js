import React, { useState } from "react";
import "../../styles/Main.scss";


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>
          {isOpen ? (
            <img src="./img/arrow_up.png" alt="Flèche vers le haut" />
          ) : (
            <img src="./img/arrow_down.png" alt="Flèche vers le bas" />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
