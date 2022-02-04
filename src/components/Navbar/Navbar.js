import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <Link to="/">
        <img src={logo} />
      </Link>
    </header>
  );
}
