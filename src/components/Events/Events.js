// src/components/Events/Events.js
import React from "react";
import "./events.css";

const Events = () => {
    return (
        <div class="events-container">
            <h2>Upcoming Events</h2>
            <ul>
                <li>Code Sprint - 9th June</li>
                <li>AI Challenge - 10th June</li>
                <li>Final Pitch - 12th June</li>
            </ul>
        </div>
    );
};

export default Events;
