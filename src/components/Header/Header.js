import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Main.scss";

const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <img src='./img/LOGO.png' alt='Logo du site'></img>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active-link" : "" }>Accueil</Link>
        <Link to="/about" className={location.pathname ==="/about" ? "active-link" : "" }>À Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
