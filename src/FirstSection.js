import React from "react";
import "./App.css";

const FirstSection = () => {
  return (
    <div>
      <section id="hero" class="jumbotron">
        <div class="container">
          <h1 class="profile-title">
            Hi, my name is <span class="text-color-main">Mubarak</span>
            <br />
            I'm the Full Stack web Developer.
          </h1>
          <p class="know-more load-hidden">
            <a
              rel="noreferrer"
              class="know-more-link cta-btn--hero"
              href="#about"
            >
              Know more
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
