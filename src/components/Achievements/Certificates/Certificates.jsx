import React from "react";
import "./Certificates.css";
import EachCertificate from "./EachCertificate";

const Certificates = () => {
  return (
    <div className="certificates__container">
      <EachCertificate />
      <EachCertificate />
      <EachCertificate />
    </div>
  );
};

export default Certificates;
