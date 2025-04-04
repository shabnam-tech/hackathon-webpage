// src/components/FAQ/FAQ.js
import React from "react";
import "./faq.css";

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul>
                <li>Q: What is CyberHack 2077?</li>
                <li>A: It is a futuristic hackathon focused on innovative tech challenges.</li>
                <li>Q: When does the hackathon take place?</li>
                <li>A: The hackathon will start on 9th June 2077.</li>
            </ul>
        </div>
    );
};

export default FAQ;
