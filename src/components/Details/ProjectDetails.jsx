import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projectName = useParams();
  const details = useSelector((state) => state.eachProject);
  console.log(details);

  //   console.log(projectName);
  return <div>Hello</div>;
};

export default ProjectDetails;
