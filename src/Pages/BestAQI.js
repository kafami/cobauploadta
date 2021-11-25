import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import React from "react";
import "./BestAQI.css"


function BestAQI() {
    const Nations = ['Nagoya', 'Puerto Rico', 'Sweden', 'Finland', 'Norway']
    return(
        <div className = "text">
            
            <div className="list">
            
            <NavLink to="/BestAirQuality1" className="iconwrapper">
            Nagoya
            </NavLink>
            <br></br>
            <NavLink to="/BestAirQuality2" className="iconwrapper">
            Puerto-Rico
            </NavLink>
            <br></br>
            <NavLink to="/BestAirQuality3" className="iconwrapper">
            Sweden
            </NavLink>
            <br></br>
            <NavLink to="/BestAirQuality4" className="iconwrapper">
            Finland
            </NavLink>
            <br></br>
            <NavLink to="/BestAirQuality5" className="iconwrapper">
            Norway
            </NavLink>
            </div>
        </div>
    );
}

export default BestAQI;