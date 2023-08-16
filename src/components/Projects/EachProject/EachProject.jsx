import React, { useRef, useState } from "react";
import "./EachProject.css";
import { motion } from "framer-motion";
import { CgChevronDoubleRight } from "react-icons/cg";
import { MdOutlineExpandMore } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addEachProjectDescription,
  addEachProjectImage,
  addEachProjectLiveDemo,
  addEachProjectName,
} from "../../../Store/Slice/EachProjectSlice";

const EachProject = ({ link, name, description, liveDemo }) => {
  // console.log(description);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showOverlay, setShowOverlay] = useState(true);
  const ref = useRef(null);
  const handleShowOverlay = () => {
    ref.current.style.bottom = "0%";
    ref.current.style.height = "100%";
    setShowOverlay(false);
  };
  const handleHideOverlay = () => {
    ref.current.style.bottom = "-200%";
    setTimeout(() => {
      setShowOverlay(true);
    }, 255);
  };
  // console.log(liveDemo);

  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="eachProject__container"
    >
      <div className="eachProject__image">
        <img loading="lazy" src={link} alt="Project Image" />
        {showOverlay && (
          <div className="openOverlay" onClick={handleShowOverlay}>
            <MdOutlineExpandMore />
          </div>
        )}
      </div>
      <div className="eachProduct__overlay" ref={ref}>
        <NavLink target="_blank" to={liveDemo} className="eachProject__details">
          <CgChevronDoubleRight />
        </NavLink>
        <motion.div
          initial={{ rotate: "180deg" }}
          animate={{ rotate: "0deg" }}
          transition={{ duration: 1 }}
          className="closeOverlay"
          onClick={handleHideOverlay}
        >
          <MdOutlineExpandMore />
        </motion.div>
        <div className="overlay__projectName">{name}</div>
        <div
          className="overlay__projectDetails"
          onClick={() => {
            navigate(`/projects/details/${name}`);
            dispatch(addEachProjectImage(link));
            dispatch(addEachProjectName(name));
            dispatch(addEachProjectLiveDemo(liveDemo));
            dispatch(addEachProjectDescription(description));
          }}
        >
          Know more....
        </div>
      </div>
    </motion.div>
  );
};

export default EachProject;
