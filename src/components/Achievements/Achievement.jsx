import React from "react";
import "./Achievement.css";
import TransitionEffect from "../Transition/TransitionEffect";
import Certificates from "./Certificates/Certificates";

const Achievement = () => {
  return (
    <div className="container">
      <TransitionEffect />
      <Certificates />
    </div>
  );
};

export default Achievement;
