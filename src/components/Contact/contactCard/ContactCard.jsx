import React from "react";
import "./ContactCard.css";

const ContactCard = ({ icon, title, subtitle, subIcons }) => {
  return (
    <div className="contactCard__container">
      <div className="contactCard__icon">
        {/* <HiOutlineLocationMarker className="contactIcon" /> */}
        {icon}
      </div>
      <div className="contactCard__title">
        <h1>{title}</h1>
        {subtitle ? (
          <span>{subtitle}</span>
        ) : (
          <span>
            {subIcons.map((subIcon) => {
              return subIcon;
            })}
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
