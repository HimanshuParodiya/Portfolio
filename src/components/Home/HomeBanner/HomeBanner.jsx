import React, { useEffect, useRef } from "react";
import "./HomeBanner.css";
import { useSelector } from "react-redux";
import MyImage from "/src/assets/me.jpg";
import Typewriter from "typewriter-effect/dist/core";
import { motion, useScroll } from "framer-motion";

const HomeBanner = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  const myName = useRef(null);

  useEffect(() => {
    new Typewriter(myName.current, {
      strings: ["Himanshu."],
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <div className={`homeBanner__container ${theme ? "light" : ""}`}>
      <div className="homeBanner__top">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="homeBanner__left"
        >
          <div className="homeBannerLeft__greeting">
            <div>
              <span className="hey">Hey,</span>
              <span className="selfIntro">
                My name is{" "}
                <span className="name" ref={myName}>
                  Himanshu.
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
          transition={{ duration: 1 }}
          className="homeBanner__right"
        >
          <img src={MyImage} alt="user" />
        </motion.div>
      </div>

      {/* <div className="homeBanner__bottom">resume download krne wala button</div> */}
    </div>
  );
};

export default HomeBanner;
