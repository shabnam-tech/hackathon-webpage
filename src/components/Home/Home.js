import React, { useEffect, useRef, useState } from "react";
import "./home.css";

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cubeRef = useRef(null);

  const handleMouseMove = (event) => {
    // Get mouse position relative to the viewport
    const mouseX = event.clientX / window.innerWidth - 0.5; // Normalize to [-0.5, 0.5]
    const mouseY = event.clientY / window.innerHeight - 0.5; // Normalize to [-0.5, 0.5]

    // Map mouse position to rotation
    const rotateX = mouseY * 40; // Y axis rotation: tilt up/down
    const rotateY = mouseX * 40; // X axis rotation: tilt left/right

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Glowing 3D Cube */}
      <div
        className="glowing-cube"
        ref={cubeRef}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
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
