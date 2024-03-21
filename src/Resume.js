import React from "react";
import resume from "./Asset/resume.png";

const Resume = () => {
  return (
    <div id="resume" className="resume-page">
      <div>
        <h1 className="resume-header">RESUME</h1>
      </div>
      <img src={resume} alt="resume" height="100%" width="100%" />
    </div>
  );
};

export default Resume;
