import React, { useState } from "react";

const Header = (props: { resumeData: any }) => {
  let resumeData = props.resumeData;
  const [changeColor, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <React.Fragment>
      <header id="home">
        <div className="background-overlay">
          <nav id="nav-wrap" className={changeColor ? "nav dark" : "nav invisible"}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a data-scroll className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a data-scroll className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a data-scroll className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a data-scroll className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a data-scroll className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif", textShadow: "0px 0px 1px #ccc" }}>
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item: any) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a data-scroll className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
