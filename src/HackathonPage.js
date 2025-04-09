import React, { useState } from "react";
import { Link } from "react-scroll";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Partners from "./components/Partners/Partners";
import Prizes from "./components/Prizes/Prizes";
import FAQ from "./components/FAQ/FAQ";
import "./styles.css";

function HackathonPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking any nav link
  };

  return (
    <div>
      {/* Background */}
      <div className="animated-bg"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="hackathon-name">CyberHack 2077</div>

        {/* Hamburger icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500} onClick={handleLinkClick}>
              Events
            </Link>
          </li>
          <li>
            <Link to="partners" smooth={true} duration={500} onClick={handleLinkClick}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="prizes" smooth={true} duration={500} onClick={handleLinkClick}>
              Prizes
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
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
}

export default HackathonPage;
