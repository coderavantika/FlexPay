import React from "react";
import "../Styling/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">FlexPay</h1>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
