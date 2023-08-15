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
      "I took this challenge form the Frontend Mentor. Where i have to create this responsive landing page using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to put my continuous learning knowledge into practice by designing its shape and functionality.",
  },
  {
    image: weather,
    name: "Weather App",
    liveDemo: "https://himanshu-weather.netlify.app/",
    description:
      "This is my very first app where i work with API of OpenWeather. Where i created this responsive weather  using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to understood the basic of fetching data and showing on our page.",
  },
  {
    image: tesla,
    name: "Tesla",
    liveDemo: "https://himanshu-react-tesla.netlify.app/",
    description:
      "when i first start leaning React js I created this responsive clone of Tesla's landing page using Reactjs and Styled-Components i choose using styled-component because i found it very new because in my preivous projects i use alot of plain CSS3 so this time i think while trying new technology like Reactjs i should also choose Styled-Components for CSS as a means to explore new technologies and their working.",
  },
  {
    image: space,
    name: "space tourism",
    liveDemo: "https://himanshu-react-space.netlify.app/",
    description:
      "I took this challenge form frontend Mentor. Where I had to create this responsive Space Tourism multipage React application which some smooth animation using Reactjs. It help me alot to understand the basics like how the react-router-dom and more.",
  },
  {
    image: netflix,
    name: "netflix",
    liveDemo: "https://himanshu-react-netflix.netlify.app/",
    description:
      "Now, This time i want to create something from real-world. So i Choose Netflix clone with login logout functionality using firebase authantication. Here i explore the React js, Reduxjs, and firebase. How these teachnologies work togather and how to integrate them together. I took help here by Sony Sangha's youtube tutorial. ",
  },
  {
    image: easyfind,
    name: "easyfind",
    liveDemo: "https://himanshu-react-easyfind.netlify.app/",
    description:
      "Now, This time was to create my first own E-commerce Web Store. This responsive E-commerce web store was challenging and it help me alot to sharpen my concepts wheather it was  handling API, nifinate Scroll and that how to work on the large Scale projects and more.",
  },

  {
    image: movix,
    name: "movix",
    liveDemo: "https://himanshu-react-movix.netlify.app/",
    description:
      "Now, finally comes the Movix. With Movix you can find any movie details, their trailers and their Casts and you can also save them in you Favorite Movies section. I have used TMDB database here to get the movies and thier data. To create this responsive Movix app i use Reactjs, ReduxToolkit & Sass. This was the best practice to understand how to handle complex API and their response in real world projects.",
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
