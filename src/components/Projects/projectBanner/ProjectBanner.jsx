import React from "react";
import "./ProjectBanner.css";
import EachProject from "../EachProject/EachProject";

import sunnyside from "/src/assets/sunnyside.png";
import calculator from "/src/assets/webcalculator.png";
import tesla from "/src/assets/tesla.png";
import space from "/src/assets/space.png";
import netflix from "/src/assets/netflix.png";
import easyfind from "/src/assets/easyfind.png";
import movix from "/src/assets/movix.png";

// let projectArray = [sunnyside, tesla, space, netflix, easyfind, movix];
let projectArray = [
  {
    image: calculator,
    name: "Calculator",
    description: "This is a Calculator build with HTML, CSS & JS.",
    liveDemo: "https://himanshu-webcalculator.netlify.app/",
  },
  {
    image: sunnyside,
    name: "Sunnyside",
    description:
      "This is frontend mentor challenge which is built with HTML, CSS & JS.",
    liveDemo: "https://himanshu-sunnyside.netlify.app/",
  },
  {
    image: tesla,
    name: "Tesla",
    description: "My first Responsive landing page created with React js ",
    liveDemo: "https://himanshu-react-tesla.netlify.app/",
  },
  {
    image: space,
    name: "space tourism",
    description:
      "This is frontend mentor challenge which is built with React.js and styled-components.",
    liveDemo: "https://himanshu-react-space.netlify.app/",
  },
  {
    image: netflix,
    name: "netflix",
    description:
      "This is a Responsive web app created with Reactjs, Reduxjs with firebase authantication ",
    liveDemo: "https://himanshu-react-netflix.netlify.app/",
  },
  {
    image: easyfind,
    name: "easyfind",
    description:
      "This is a Responsive E-commerce store created with Reactjs & Context Api ",
    liveDemo: "https://himanshu-react-easyfind.netlify.app/",
  },

  {
    image: movix,
    name: "movix",
    description:
      "This is a Responsive web app created with Reactjs, Redux toolkit & Saas ",
    liveDemo: "https://himanshu-react-movix.netlify.app/",
  },
];

const ProjectBanner = () => {
  return (
    <div className="projectBanner__container container">
      <div className="projectBanner__heading">From Concept to Creation</div>
      <div className="projectBanner__card">
        {projectArray.map((item, index) => {
          return (
            <EachProject
              key={index}
              link={item.image}
              name={item.name}
              description={item.description}
              liveDemo={item.liveDemo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBanner;
