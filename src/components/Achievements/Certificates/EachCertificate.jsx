import React from "react";
import "./EachCertificate.css";

const EachCertificate = ({ certificateImage }) => {
  return (
    <div className="eachCertificate__container">
      <img src={certificateImage} alt="" />
    </div>
  );
};

export default EachCertificate;
