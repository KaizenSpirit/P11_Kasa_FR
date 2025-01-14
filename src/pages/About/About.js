import React from "react";
import Banner from "../../components/Banner/Banner.js";
import Accordion from "../../components/Accordion/Accordion.js";
import { aboutAccordionData } from "../../constants/constants.js";
import aboutBannerImage from "../../staticImages/ImageAbout.png"; 

const About = () => {
  return (
    <div>
      <Banner text="" pictures={[aboutBannerImage]}/>
      <div className="collapse-container">
          {aboutAccordionData.map((item, index) => (<Accordion key={index} title={item.title} content={item.content} />))}
      </div>
    </div>
  );
};

export default About;

