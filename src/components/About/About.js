import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About CyberHack 2077</h2>
        <p>CyberHack 2077 is an immersive hackathon where innovation meets the future!</p>
        <p>Get ready to build futuristic solutions, connect with fellow devs, and have fun!</p>
      </div>
      <img src="/images/image.gif" alt="CyberHack Glitchy Laptop" className="about-image" />
    </div>
  );
};

export default About;
