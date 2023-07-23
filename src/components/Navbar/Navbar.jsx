import React, { useRef, useState } from "react";
import "./Navbar.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { setTheme } from "../../Store/Slice/ThemeSlice";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.appTheme);
  //   console.log(theme);
  const [showHamburger, setShowHamburger] = useState(true);
  const dispatch = useDispatch();
  const hamburgerIcon = useRef();
  const handleHamburgerMenu = () => {
    hamburgerIcon.current.classList.toggle("show");
    setShowHamburger(!showHamburger);
  };

  return (
    <header className="header__container container ">
      <nav className={`navbar__container ${theme ? "light" : ""}`}>
        <div className="logo">HP</div>
        <div className="navbar__menu">
          <div
            className={`hamburgerMenu ${theme ? "light" : ""}`}
            onClick={handleHamburgerMenu}
          >
            {showHamburger ? <GiHamburgerMenu /> : <RxCross2 />}
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
        <div className="theme" onClick={() => dispatch(setTheme(!theme))}>
          {theme ? <BsFillMoonStarsFill /> : <BsFillSunFill color="gold" />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
