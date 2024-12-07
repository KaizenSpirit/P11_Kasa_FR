import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <img src='./LOGO.png' alt='Logo du site'></img>
      <nav>
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">À Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
