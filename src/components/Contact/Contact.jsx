import React from "react";
import "./Contact.css";
import ContactCard from "./contactCard/ContactCard";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall, FiShare2 } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { useSelector } from "react-redux";
import TransitionEffect from "../Transition/TransitionEffect";

const Contact = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  return (
    <>
      <TransitionEffect />
      <div className={`contact__container container ${theme ? "light" : ""}`}>
        <div className="contact__banner">
          <div className="contact__heading">Contact Me</div>
          <div className="contact__blocks">
            <ContactCard
              icon={<HiOutlineLocationMarker className="contactIcon" />}
              title="My Address"
              subtitle="Delhi, India 110052"
            />
            <ContactCard
              icon={<FiShare2 className="contactIcon" />}
              title="Social Profiles"
              subIcons={[
                <SiLinkedin className="contact__subIcons" />,
                <GrInstagram className="contact__subIcons" />,
              ]}
            />
            <ContactCard
              icon={<HiOutlineMail className="contactIcon" />}
              title="Email Me"
              subtitle="jayreactdeveloper@gmail.com"
            />
            <ContactCard
              icon={<FiPhoneCall className="contactIcon" />}
              title="Calendly"
              subtitlelink="Book a Slot"
            />
          </div>
          <div className="contact__subHeading">Get in Touch</div>
          <div className="contact__tagline">
            Thank you for visiting my portfolio. If you have any questions or
            would like to explore potential opportunities, please don't hesitate
            to reach out. I am constantly looking for new opportunities in
            industry, I am willing to work in the field of web-development.
          </div>
          <div className="contact__button">Contact Me</div>
        </div>
      </div>
    </>
  );
};

export default Contact;