import React from "react";
import "./prizes.css";

const Prizes = () => {
    return (
        <div className="prizes-container">
        <h2>Prizes & Rewards</h2>
        <p className="prize-intro">Win exciting prizes and showcase your skills to top tech leaders!</p>
      
        <ul className="prize-list">
          <li>
            🥇 <strong>1st Place:</strong> $5000 + Trophy + Internship Opportunity with TCS
          </li>
          <li>
            🥈 <strong>2nd Place:</strong> $3000 + Swags + Mentorship Session with Industry Experts
          </li>
          <li>
            🥉 <strong>3rd Place:</strong> $1500 + Certificate of Excellence + Free Courses by TutorialsPoint
          </li>
          <li>
            🚀 <strong>Best Innovation Award:</strong> Smart Gadgets + Special Mention on Website
          </li>
          <li>
            🌐 <strong>Top 10 Finalists:</strong> E-Certificates + LinkedIn Endorsement + Spotlight on Social Media
          </li>
        </ul>
      
        <p className="prize-note">All participants will receive a certificate of participation.</p>
      </div>
      
    );
};

export default Prizes;
