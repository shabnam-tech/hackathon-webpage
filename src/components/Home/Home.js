import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    const rotateX = mouseY * 40;
    const rotateY = mouseX * 40;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      // Auto-rotate cube on mobile
      const interval = setInterval(() => {
        setRotation((prev) => ({
          x: prev.x + 0.5,
          y: prev.y + 0.5,
        }));
      }, 50); // Adjust speed if needed
  
      return () => clearInterval(interval);
    }
  }, []);
  
  return (
    <div className="home-container">
  <div
  className="glowing-cube"
  style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
  >

        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      <div className="text-container">
        <h1>Welcome to CyberHack 2077</h1>
        <p className="home-subtext">Where the future of hacking meets innovation.</p>
        <a href="#about" className="cyber-button">Explore Now</a>
      </div>
    </div>
  );
};

export default Home;
