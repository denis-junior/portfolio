import React from "react";
import "./Navbar.css";
import { items } from "../../SideBarObjects";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const changeBackground = () => {
  //   console.log(window.scrollY)
  // }
  // window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className="navbar">
        <div className="logo-img">logo here</div>
        <ul className="box-links">
          <li className="nav-links">
            <a href="#about" className="btn third">
              About
            </a>
          </li>
          <li className="nav-links">
            <a href="#projects" className="btn third">
              Projects
            </a>
          </li>
          <li className="nav-links">
            <a href="#contact" className="btn third">
              Contact
            </a>
          </li>
        </ul>

        <FaIcons.FaBars className="bar" onClick={showSidebar} style={{ cursor: "pointer" }} />
      </nav>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="" onClick={showSidebar}>
          <li>
            <CgIcons.CgCloseR style={{cursor: "pointer"}} />
          </li>
          {items.map((item, index) => {
            return (
              <li className="links-li-sidebar" key={index}>
                <span className="icon-sidebar">
                {item.icon}
                </span>
                <a href={item.path} className="text-sidebar">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
