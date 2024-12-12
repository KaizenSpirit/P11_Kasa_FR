import React from "react";
import Banner from "../../components/Banner/Banner.js";
import Accordion from "../../components/Accordion/Accordion.js";
import { aboutAccordionData } from "../../constants/constants.js";
const About = () => {
  return (
    <div>
      <Banner text="" image="/img/imageAbout.png"/>
      {
      aboutAccordionData.map((item, index) => (<Accordion key={index} title={item.title} content={item.content} />))
      }
    </div>
  );
};

export default About;

