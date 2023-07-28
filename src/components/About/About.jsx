import React from "react";
import "./About.css";
import TransitionEffect from "../Transition/TransitionEffect";
import AboutBanner from "./aboutBanner/AboutBanner";
import Technologies from "./technologies/Technologies";
import { motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="about__container container">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="vertical__progress"
      />
      <TransitionEffect />
      <AboutBanner />
      <Technologies />
    </div>
  );
};

export default About;
