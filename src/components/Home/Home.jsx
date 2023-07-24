import React from "react";
import "./Home.css";
import HomeBanner from "./homeBanner/HomeBanner";
import TransitionEffect from "../Transition/TransitionEffect";

const Home = () => {
  return (
    <div className="container">
      <TransitionEffect />
      <HomeBanner />
    </div>
  );
};

export default Home;
