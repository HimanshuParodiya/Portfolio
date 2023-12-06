import React from "react";
import "./ProjectBanner.css";
import EachProject from "../EachProject/EachProject";

import sunnyside from "/src/assets/sunnyside.png";
import calculator from "/src/assets/webcalculator.png";
import weather from "/src/assets/Weather.png";
import tesla from "/src/assets/tesla.png";
import space from "/src/assets/space.png";
import netflix from "/src/assets/netflix.png";
import easyfind from "/src/assets/easyfind.png";
import movix from "/src/assets/movix.png";
import portfolio3d from "/src/assets/3dPortfolio.png";

// let projectArray = [sunnyside, tesla, space, netflix, easyfind, movix];
let projectArray = [
  {
    image: calculator,
    name: "Calculator",
    liveDemo: "https://himanshu-webcalculator.netlify.app/",
    description:
      "I created this responsive calculator using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to put my continuous learning knowledge into practice by designing its shape and functionality.",
  },
  {
    image: sunnyside,
    name: "Sunnyside",
    liveDemo: "https://himanshu-sunnyside.netlify.app/",
    description:
      "I took this challenge from the Frontend Mentor. Where I have to create this responsive landing page using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to put my continuous learning knowledge into practice by designing its shape and functionality.",
  },
  {
    image: weather,
    name: "Weather App",
    liveDemo: "https://himanshu-weather.netlify.app/",
    description:
      "This is my very first app where I work with the API of OpenWeather. Where I created this responsive weather using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to understand the basic of fetching data and showing it on our page.",
  },
  {
    image: tesla,
    name: "Tesla",
    liveDemo: "https://himanshu-react-tesla.netlify.app/",
    description:
      "When I first start learning React js I created this responsive clone of Tesla's landing page using Reactjs and Styled-Components I choose using styled-component because I found it very new because, in my previous projects, I use a lot of plain CSS3 so this time I think while trying new technology like Reactjs I should also choose Styled-Components for CSS as a means to explore new technologies and their working.",
  },
  {
    image: space,
    name: "space tourism",
    liveDemo: "https://himanshu-react-space.netlify.app/",
    description:
      "I took this challenge from the frontend Mentor. Where I had to create this responsive Space Tourism multipage React application which some smooth animation using Reactjs. It helps me a lot to understand the basics like how the react-router-dom and more.",
  },
  {
    image: netflix,
    name: "Netflix",
    liveDemo: "https://himanshu-react-netflix.netlify.app/",
    description:
      "Now, This time I want to create something from the real world. So I Choose a Netflix clone with login logout functionality using Firebase authentication. Here I explore React js, Redux js, and Firebase. How these technologies work together and how to integrate them. I took help here from Sony Sangha's youtube tutorial. ",
  },
  {
    image: easyfind,
    name: "Easyfind",
    liveDemo: "https://himanshu-react-easyfind.netlify.app/",
    description:
      "Now, This time was to create my first own E-commerce Web Store. This responsive E-commerce web store was challenging and it help me a lot to sharpen my concepts whether it was  handling API, infinite Scroll how to work on large-scale projects, and more.",
  },

  {
    image: movix,
    name: "movix",
    liveDemo: "https://himanshu-react-movix.netlify.app/",
    description:
      "Now, finally comes the Movix. With Movix you can find any movie details, their trailers, and their Casts and you can also save them in your Favorite Movies section. I have used the TMDB database here to get the movies and their data. To create this responsive Movix app I use Reactjs, ReduxToolkit & Sass. This was the best practice to understand how to handle complex API and their response in real-world projects.",
  },
  {
    image: portfolio3d,
    name: "3d Portfolio",
    liveDemo: "https://himanshu-3d-me.netlify.app/",
    description:
      "Create this 3d portfolio during learning three.js watching online tutorial by Javascript Mastery",
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
