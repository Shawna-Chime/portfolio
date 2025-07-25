import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-main">
        <div className="hero-heading">
          <div className="hero-title">
            <h1>SHAWNA CHIME</h1>
          </div>
          <div className="hero-text">
            <h2>Designer</h2>
            <i class="ri-star-s-fill"></i>
            <h2>Developer</h2>
            <i class="ri-star-s-fill"></i>
            <h2>Creative</h2>
          </div>
        </div>
        <Link to={"/Projects"}>
          <button className="hero-btn">View Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
