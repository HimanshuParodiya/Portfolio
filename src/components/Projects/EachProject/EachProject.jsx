import React, { useRef, useState } from "react";
import "./EachProject.css";
import { motion } from "framer-motion";
import { CgChevronDoubleRight } from "react-icons/cg";
import { MdOutlineExpandMore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const EachProject = ({ link, name, description, liveDemo }) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const ref = useRef(null);
  const handleShowOverlay = () => {
    ref.current.style.bottom = "0%";
    ref.current.style.height = "100%";
    setShowOverlay(false);
  };
  const handleHideOverlay = () => {
    ref.current.style.bottom = "-100%";
    setTimeout(() => {
      setShowOverlay(true);
    }, 255);
  };
  console.log(liveDemo);

  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="eachProject__container"
    >
      <div className="eachProject__image">
        <img loading="lazy" src={link} alt="Project Image" />
      </div>
      {showOverlay && (
        <div className="openOverlay" onClick={handleShowOverlay}>
          <MdOutlineExpandMore />
        </div>
      )}
      <div className="eachProduct__overlay" ref={ref}>
        <NavLink target="_blank" to={liveDemo} className="eachProject__details">
          <CgChevronDoubleRight />
        </NavLink>
        <motion.div
          initial={{ rotate: "180deg" }}
          whileInView={{ rotate: "0deg" }}
          transition={{ duration: 0.5 }}
          className="closeOverlay"
          onClick={handleHideOverlay}
        >
          <MdOutlineExpandMore />
        </motion.div>
        <div className="overlay__projectName">{name}</div>
        <div className="overlay__projectDescription">{description}</div>
      </div>
    </motion.div>
  );
};

export default EachProject;
