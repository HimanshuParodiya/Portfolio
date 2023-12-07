import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import achievementPoints from "../../../json/achievementData/AchievementData.json";
import "./AchievementPointes.css";
import { LiaCertificateSolid } from "react-icons/lia";

const AchievementPointes = () => {
  return (
    <div className="achievementPointes__container">
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          //   date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        ></VerticalTimelineElement>
      </VerticalTimeline> */}

      {/* <ul className="achievementPointes__ul">
            <li className="achievementPointes__li">
              {achievementPoints.achievements.map((achievement) => {
                return <div>{achievement.title}</div>;
              })}
            </li>
          </ul> */}

      <div className="mainDiv">
        <VerticalTimeline>
          {achievementPoints.achievements.map((achievement) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgba(132, 94, 194, 0.2)" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              //   date="2011 - present"
              iconStyle={{
                background: "#191825",
                color: "#fff",
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={achievement.id}
            >
              <div>
                <h3 className="achievement__title">{achievement.title}</h3>
                <p className="achievement__desc">{achievement.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AchievementPointes;
