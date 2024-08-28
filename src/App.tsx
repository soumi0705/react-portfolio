import "./App.css";

import { Component } from "react";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Resume from "./components/Resume.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Footer from "./components/Footer.tsx";
import resumeData from "./resumeData.ts";
import SmoothScroll from "smooth-scroll";
class App extends Component {
  render() {
    new SmoothScroll('a[href*="#"]', {
      speed: 200,
    });
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
