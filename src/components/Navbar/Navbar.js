import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <img src={logo} />
    </header>
  );
}
