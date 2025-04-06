import React from "react";
import "./partners.css";
import inno from './inno.png';
import door from './door.jpg';
import goorej from './goorej.jpg';
import h2 from './h2.png';
import moe from './moe.png';
import sbi from './sbi.jpeg';
import tcs from './tcs.png';
import tutor from './tutor.jpg';
import all from './all.jpg';

const Partners = () => {
    return (
        <div className="partners-container">
<h2 className="partners-title">Organisers</h2>
  <div className="partners-container">
    <div className="partners-row">
      <div className="partner">
        <img src={moe} alt="MoE's Innovation Cell" />
      </div>
      <div className="partner">
        <img src={sbi} alt="SBI Foundation" />
      </div>
      <div className="partner">
        <img src={inno} alt="Innovation for India" />
      </div>
    </div>
    <div className="partners-row">
      <div className="partner">
        <h3>Official Partner</h3>
        <img src={goorej} alt="Godrej Appliances" />
      </div>
      <div className="partner">
        <h3>Evaluation Partner</h3>
        <img src={tcs} alt="TCS" />
      </div>
      <div className="partner">
        <h3>Learning Partner</h3>
        <img src={tutor} alt="TutorialsPoint" />
      </div>
    </div>
    <div className="partners-row">
      <div className="partner">
        <h3>Official Media Partner</h3>
        <img src={all} alt="All India Radio" />
        <img src={door} alt="Doordarshan" />
      </div>
      <div className="partner">
        <h3>Platform Partner</h3>
        <img src={h2} alt="Hack2Skill" className="large-partner" />
      </div>
    </div>
  </div>
        </div>
    );
};

export default Partners;
