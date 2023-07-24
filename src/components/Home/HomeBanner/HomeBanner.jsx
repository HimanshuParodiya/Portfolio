import React, { useEffect, useRef } from "react";
import "./HomeBanner.css";
import { useSelector } from "react-redux";
import MyImage from "/src/assets/me.jpg";
import Typewriter from "typewriter-effect/dist/core";

const HomeBanner = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  const myName = useRef();

  useEffect(() => {
    new Typewriter(myName.current, {
      strings: ["Himanshu."],
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <div className={`homeBanner__container ${theme ? "light" : ""}`}>
      <div className="homeBanner__left">
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
            <span className="intro__tagline">
              Turning passion into proficiency,
            </span>{" "}
            I am a self-taught web developer on an exciting journey through the
            boundless realm of web development.
          </div>
        </div>
      </div>
      <div className="homeBanner__right">
        <img src={MyImage} alt="user" />
      </div>
    </div>
  );
};

export default HomeBanner;
