import React from "react";
import "./Navbar.css"
const Navbar = () => {
  
  // const changeBackground = () => {
  //   console.log(window.scrollY)
  // }
  
  // window.addEventListener('scroll', changeBackground)

  return (
    <div className="navbar">
      <div className="logo-img">logo here</div>
      <ul className="box-links">
        <li className="nav-links">
          <a href="#about" className="btn third">About</a>
        </li>
        <li className="nav-links">
          <a href="#projects" className="btn third">Projects</a>
        </li>
        <li className="nav-links">
          <a href="#contact" className="btn third">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
