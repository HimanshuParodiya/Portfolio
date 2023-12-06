import React from "react";
import "./Certificates.css";
import EachCertificate from "./EachCertificate";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaCertificateSolid } from "react-icons/lia";
import cssCertificate from "../../../assets/css_certificate.png";
import ReactCertificate from "../../../assets/React_certificate.png";
import JavascriptCertificate from "../../../assets/Javascript_certificate.png";

const Certificates = () => {
  return (
    <div className="certificates__container">
      <h2 className="certificates__heading">Certificates</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          //   date="2011 - present"
          iconStyle={{ background: "#191825", color: "#845EC2" }}
          icon={<LiaCertificateSolid style={{ scale: "1.3" }} />}
        >
          <EachCertificate certificateImage={cssCertificate} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          //   date="2011 - present"
          iconStyle={{ background: "#191825", color: "#845EC2" }}
          icon={<LiaCertificateSolid style={{ scale: "1.3" }} />}
        >
          <EachCertificate certificateImage={ReactCertificate} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          //   date="2011 - present"
          iconStyle={{ background: "#191825", color: "#845EC2" }}
          icon={<LiaCertificateSolid style={{ scale: "1.3" }} />}
        >
          <EachCertificate certificateImage={JavascriptCertificate} />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Certificates;
