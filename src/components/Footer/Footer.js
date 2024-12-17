import React from "react";
import "../../styles/Main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={`${process.env.PUBLIC_URL}/img/LOGO_black.png`} alt="Logo du site en couleur noire et blanc"></img>
      <p>&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
