import React from "react";
import "./Technologies.css";
import Card from "../../Card/Card";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="technologies__container">
      <span className="technologies__heading">TECHNOLOGIES I KNOW</span>
      <div className="card">
        <Card icon={<SiHtml5 />} title="HTML" color="#DD4B25" />
        <Card icon={<SiCss3 />} title="CSS" color="#254BDD" />
        <Card icon={<SiTailwindcss />} title="Tailwind Css" color="#49ABB6" />
        <Card icon={<SiSass />} title="Sass" color="#CF6C9C" />
        <Card
          icon={<TbBrandFramerMotion />}
          title="Framer Motion"
          color="linear-gradient(135deg, #cf25b2 0%, #7447f9 100%)"
        />
        <Card
          icon={<SiStyledcomponents />}
          title="Styled Components"
          color="#E48F83"
        />
        <Card icon={<SiJavascript />} title="JavaScript" color="#F7E025" />
        <Card icon={<SiReact />} title="React" color="#1675e0" />
        <Card icon={<TbBrandRedux />} title="Redux" color="#7248B6" />
      </div>
    </div>
  );
};

export default Technologies;
