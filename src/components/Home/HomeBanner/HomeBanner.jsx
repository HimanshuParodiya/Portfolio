import React, { useEffect, useRef } from "react";
import "./HomeBanner.css";
import { useSelector } from "react-redux";
import MyImage from "/src/assets/me.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import TypingAnimation from "../../../Utils/TypingAnimation/TypingAnimation";
// import animatedText from "../../../assets/AnimatedText.png";

const HomeBanner = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  const myName = useRef(null);

  return (
    <div className={`homeBanner__container ${theme ? "light" : ""}`}>
      <div className="homeBanner__top">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="homeBanner__left"
        >
          <div className="homeBannerLeft__greeting">
            <div>
              <span className="hey">Hey,</span>
              <span className="selfIntro">
                My name is{" "}
                <span className="name">
                  <TypingAnimation element={myName} text={["Himanshu"]} />
                </span>
              </span>
            </div>
            <div className="homeBannerLeft__intro">
              <div>
                <span className="intro__tagline">
                  Turning passion into proficiency,
                </span>{" "}
                {/* I am a self-taught web developer on an exciting journey through the
            boundless realm of web development. */}
                I am a self-taught web developer who does believe in skill and
                is on an exciting journey through the boundless realm of web
                development.
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="homeBanner__right"
        >
          <img src={MyImage} alt="user" />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="homeBanner__bottom"
      >
        <div className="homeBannerBottom__buttons">
          <a
            href="#"
            className={`button__resume bottom__button ${theme ? "light" : ""}`}
          >
            Resume
          </a>

          <NavLink
            // href="https://github.com/"

            to="/about"
            className={`button__Github bottom__button ${theme ? "light" : ""}`}
          >
            More about me
          </NavLink>
        </div>
        {/* <div className="hireMe">
          <img className="hireMe__image" src={animatedText} alt="" />
          <div className="hireText">Excited to work </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default HomeBanner;
