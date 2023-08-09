import React from "react";
import "./Project.css";
import ProjectBanner from "./projectBanner/ProjectBanner";
import TransitionEffect from "../Transition/TransitionEffect";
import { motion, useScroll } from "framer-motion";

const Project = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="project__container container">
      <TransitionEffect />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="vertical__progress"
      />
      <TransitionEffect />
      <ProjectBanner />
    </div>
  );
};

export default Project;
