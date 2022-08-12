import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-img">logo here</div>
      <ul className="box-links">
        <li className="nav-links">
          <a href="#about">About</a>
        </li>
        <li className="nav-links">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-links">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
