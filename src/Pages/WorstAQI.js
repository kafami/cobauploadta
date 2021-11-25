import { Button } from "bootstrap";
import React from "react";
import "./WorstAQI.css"

import { NavLink, Route, Routes, Navigate } from 'react-router-dom';


function WorstAQI() {
    const Nations = ['Dhaka', 'Kolkata', 'Lahore', 'Delhi', 'Lima']
    return(
        <div className = "text">
            <NavLink to="/WorstAirQuality1" className="iconwrapper">
            Dhaka
            </NavLink>
            <br></br>
            <NavLink to="/WorstAirQuality2" className="iconwrapper">
            Kolkata
            </NavLink>
            <br></br>
            <NavLink to="/WorstAirQuality3" className="iconwrapper">
            Lahore
            </NavLink>
            <br></br>
            <NavLink to="/WorstAirQuality4" className="iconwrapper">
            Delhi
            </NavLink>
            <br></br>
            <NavLink to="/WorstAirQuality5" className="iconwrapper">
            Lima
            </NavLink>
            
        </div>
    )
    
}

export default WorstAQI