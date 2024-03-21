import React from "react";
import image from "./Asset/IMG_4667.PNG";
import "./App.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <h2 className="section-title load-hidden">ABOUT ME</h2>
          <div className="image-div about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image load-hidden">
                <img
                  alt="Profile"
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="500px"
                  src={image}
                />
              </div>
            </div>
            <div className="">
              <div className="about-me-text-div">
                <p className="about-me-text">
                  Results-driven and solution-oriented professional, adept at
                  navigating intricate algorithms to develop tailored solutions
                  that align with users' requirements. Demonstrates proficiency
                  in crafting clean and efficient code, adhering to industry
                  standards across multiple programming languages, including
                  Java, JavaScript, C#, and Node. Actively pursuing
                  opportunities as a Full Stack Web Developer to leverage skills
                  in creating seamless and innovative web applications.
                </p>
                <p className="about-wrapper__info-text">
                  Hobbies: Playing football, Playing video games, Jogging,
                  Watching movies
                </p>
                <span className="">
                  <a rel="noreferrer" className="view-resume" href="#resume">
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
