import React from "react";
import { Link } from "react-scroll";  
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Partners from "./components/Partners/Partners";
import Prizes from "./components/Prizes/Prizes";
import FAQ from "./components/FAQ/FAQ";
import "./styles.css";

function HackathonPage() {
  return (
    <div>
      {}
      <div className="animated-bg"></div>

      {}
      <nav className="navbar">
        <div className="hackathon-name">CyberHack 2077</div>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="events" smooth={true} duration={500}>Events</Link></li>
          <li><Link to="partners" smooth={true} duration={500}>Partners</Link></li>
          <li><Link to="prizes" smooth={true} duration={500}>Prizes</Link></li>
          <li><Link to="faq" smooth={true} duration={500} offset={-70}>FAQ</Link></li>
        </ul>
      </nav>

      {}
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="events" className="section">
        <Events />
      </section>
      <section id="partners" className="section">
        <Partners />
      </section>
      <section id="prizes" className="section">
        <Prizes />
      </section>
      <section id="faq" className="section">
        <FAQ />
      </section>
    </div>
  );
};

export default HackathonPage;
