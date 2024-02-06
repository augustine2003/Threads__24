import React from "react";
import BannerBackground from "../images/coding.jpg";
import BannerImage from "../images/coding.jpg";
import { Navbar } from "./Navbar";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="landingpage">
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">Welcome to THREADS'24.</h1>
            <p className="primary-text">
              A Journey of Discovery and Innovation at Threads'24, Where Ideas
              Unravel and Knowledge Weaves its Intricate Patterns
            </p>
            <a
              className="register_btn"
              href="https://youtube.com/c/shortcode"
              target="_blank"
            >
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Register NOW
            </a>
          </div>
        </div>
      </div>
      <Fade>
        <div className="section2">
          <h1 className="demo">next section</h1>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
