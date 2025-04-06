import React,  { useState }  from "react";
import "./faq.css";

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

const FAQ = () => {
    return (
        <div id="faq" title="Frequently Asked Questions">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <FAQItem question="Who can participate?" answer="Open to students and professionals passionate about coding." />
          <FAQItem question="What do I need to bring?" answer="Laptop, chargers, and a problem-solving mindset." />
          <FAQItem question="What are the prizes?" answer="Cash prizes, goodies, internship offers, and more." />
        </div>
    );
};

export default FAQ;
