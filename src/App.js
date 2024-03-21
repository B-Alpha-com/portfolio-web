import React, { Component } from "react";
import FirstSection from "./FirstSection";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <FirstSection />
        <About />
        <Resume />
        <Project />
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
