import React from "react";
import chopify from "./Asset/chopify.mp4";
import countdown from "./Asset/countdown.mp4";
import weather from "./Asset/javaWeather.mp4";
import "./App.css";

const Project = () => {
  return (
    <div>
      <section id="projects">
        <div className="project-container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            <div className="row">
              <div className="text-wrapper">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">Chopify</h3>
                  <div>
                    <p className="mb-4">
                      Describe the project being very specific, you can use the
                      Twitter standard: no more than 280 characters: complement
                      the information: the skills learned or reinforced in its
                      realization and how you faced it, prove to be proactive in
                      the search for solutions.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href=" https://mubarakolasode.github.io/e-commerce/"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    className="source-code"
                    href="https://github.com/mubarakOlasode/e-commerce"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-wrapper-image">
                <div className="project-wrapper__image load-hidden">
                  <video height="100%" width="100%" controls>
                    <source src={chopify} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            {/* <!-- /END Project1 --> */}
            <div className="row">
              <div className="text-wrapper">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Event Count Down
                  </h3>
                  <div>
                    <p className="mb-4">
                      Demonstrate in this description the skills of a
                      programmer: such as having commitment, having perseverance
                      and accepting alternative solutions. Remember that being a
                      portfolio you are not selling the project, you are selling
                      yourself, it reflects the resources used: Frameworks,
                      libraries, platforms, etc.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="b-alpha-com.github.io/EventCountDown/"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    className="source-code"
                    href="https://github.com/B-Alpha-com/EventCountDown"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-wrapper-image">
                <div className="project-wrapper__image load-hidden">
                  <video height="100%" width="100%" controls>
                    <source src={countdown} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            {/* <!-- /END Project -->2 */}

            <div className="row">
              <div className="text-wrapper">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">Weather App</h3>
                  <div>
                    <p className="mb-4">
                      If the project was collaborative, reflect it in this
                      description, that will demonstrate communication and/or
                      leadership skills. Additionally, if you made use of the
                      mastery of a second language, it will reflect on you
                      professionalism.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="#!"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="source-code"
                    href="#!"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-wrapper-image">
                <div className="project-wrapper__image load-hidden">
                  <video height="100%" width="100%" controls>
                    <source src={weather} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            {/* <!-- /END Project -->3 */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
