import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav>
        <Link to="/">
          <img src={logo} alt="LOGO" />
        </Link>
      </nav>
    </header>
  );
}
