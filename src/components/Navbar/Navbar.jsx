import React, { useRef, useState } from "react";
import "./Navbar.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const hamburgerIcon = useRef();
  const handleHamburgerMenu = () => {
    hamburgerIcon.current.classList.toggle("show");
  };

  return (
    <header className="header__container container">
      <nav className="navbar__container">
        <div className="logo">HP</div>
        <div className="navbar__menu">
          <div className="hamburgerMenu" onClick={handleHamburgerMenu}>
            <GiHamburgerMenu />
          </div>
          <ul ref={hamburgerIcon} className="navbar__menuUl">
            <li className="navbar__menuLi">
              <a href="#" className="navbar__menuLink">
                Home
              </a>
            </li>
            <li className="navbar__menuLi">
              <a href="#" className="navbar__menuLink">
                About
              </a>
            </li>
            <li className="navbar__menuLi">
              <a href="#" className="navbar__menuLink">
                Projects
              </a>
            </li>
            <li className="navbar__menuLi">
              <a href="#" className="navbar__menuLink">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="theme">
          <BsFillMoonStarsFill />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
