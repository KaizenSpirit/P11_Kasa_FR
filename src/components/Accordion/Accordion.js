import React, { useState } from "react";
import "../../styles/Main.scss";


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header">
        <h3>{title}</h3>
        <span onClick={toggleAccordion} className={`arrow ${isOpen ? "rotated" : ""}`}>
            <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="Flèche" />
        </span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
      <p>{content}</p>
    </div>
    </div>
  );
};

export default Accordion;
