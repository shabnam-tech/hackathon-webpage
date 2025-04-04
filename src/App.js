import React, { useState } from "react";
import { Link } from "react-scroll";
import "./App.css";
import LearnathonImage from "./Assets/Image1.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Learnathon</div>
      <div className="nav-links">
        <Link to="home" smooth={true} duration={500} offset={-50}>Home</Link>
        <Link to="hackathon" smooth={true} duration={500} offset={-50}>Hackathon</Link>
        <Link to="event" smooth={true} duration={500} offset={-50}>Event Details</Link>
        <Link to="accommodation" smooth={true} duration={500} offset={-50}>Accommodation</Link>
        <Link to="faq" smooth={true} duration={500} offset={-50}>FAQs</Link>
        <Link to="organizers" smooth={true} duration={500} offset={-50}>Organizers</Link>
      </div>
      <div className="nav-buttons">
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="section">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-box ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">{question}</div>
      <div className="faq-answer" style={{ maxHeight: isOpen ? "500px" : "0px", padding: isOpen ? "15px" : "0px" }}>
        {isOpen && answer}
      </div>
    </div>
  );
};

const Event = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    { id: 1, name: "AI Model Showdown", time: "10 AM - 12 PM", desc: "Compete to build the best AI model for real-world problems." },
    { id: 2, name: "Capture the Flag (CTF)", time: "12 PM - 2 PM", desc: "Test your cybersecurity skills in this intense hacking challenge." },
    { id: 3, name: "Web Dev Sprint", time: "2 PM - 4 PM", desc: "Build a stunning website with a surprise theme in 2 hours." },
    { id: 4, name: "Bug Bounty Challenge", time: "4 PM - 6 PM", desc: "Find vulnerabilities in a given application to win rewards." },
    { id: 5, name: "Code Golf", time: "6 PM - 8 PM", desc: "Write the shortest and most efficient code to solve problems." },
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="event">
      <h2>Event Details & Schedule</h2>
      <div className="event-container">
        {/* Left Side - Event Carousel */}
        <div className="event-carousel">
          <button className="arrow arrow-left" onClick={prevEvent}>⬅</button>
          <div className="event-box">
            <h3>{events[currentEvent].name}</h3>
            <p><strong>Time:</strong> {events[currentEvent].time}</p>
            <p>{events[currentEvent].desc}</p>
            <button className="view-info-btn">View Information</button>
          </div>
          <button className="arrow arrow-right" onClick={nextEvent}>➡</button>
        </div>

        {/* Right Side - Event Details */}
        <div className="event-info">
          <p><strong>Venue:</strong> Thiagarajar College of Engineering, Madurai</p>
          <p><strong>Date:</strong> 10th - 12th April 2025</p>
          <p><strong>Duration:</strong> 24 Hours Non-Stop</p>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        
        <Section id="home" title="">
          <div className="home-container">
            <img src={LearnathonImage} alt="Learnathon Banner" className="home-image" />
            <div className="home-content">
              <h2>Welcome to Learnathon 2025</h2>
              <p>Unleash your coding skills and creativity in one of the most exciting hackathons of the year.</p>
            </div>
          </div>
        </Section>

        <Section id="hackathon" title="What is Learnathon?">
          <p>Learnathon is an intense, innovative, and fun-filled coding challenge where students and professionals come together to solve real-world problems.</p>
        </Section>

        <Event />

        <Section id="accommodation" title="Accommodation Details">
          <p>For outstation participants, we have arranged comfortable stay options near the venue.</p>
        </Section>

        <Section id="faq" title="Frequently Asked Questions">
          <FAQItem question="Who can participate?" answer="Open to students and professionals passionate about coding." />
          <FAQItem question="What do I need to bring?" answer="Laptop, chargers, and a problem-solving mindset." />
          <FAQItem question="What are the prizes?" answer="Cash prizes, goodies, internship offers, and more." />
        </Section>

        <Section id="organizers" title="Organizing Institution">
          <p>Thiagarajar College of Engineering proudly presents Learnathon 2025.</p>
        </Section>

      </div>
    </div>
  );
};

export default App;
