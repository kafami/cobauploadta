import React, { Component } from 'react';
import './App.css';
import AirQuality from './airQuality/AirQuality';
import BestAQI from './Pages/BestAQI';
import WorstAQI from './Pages/WorstAQI';
import WorstAirQuality1 from './airQuality/WorstAirQuality1';
import WorstAirQuality2 from './airQuality/WorstAirQuality2';
import WorstAirQuality3 from './airQuality/WorstAirQuality3';
import WorstAirQuality4 from './airQuality/WorstAirQuality4';
import WorstAirQuality5 from './airQuality/WorstAirQuality5';
import BestAirQuality1 from './airQuality/BestAirQuality1';
import BestAirQuality2 from './airQuality/BestAirQuality2';
import BestAirQuality3 from './airQuality/BestAirQuality3';
import BestAirQuality4 from './airQuality/BestAirQuality4';
import BestAirQuality5 from './airQuality/BestAirQuality5';
import Details from './Pages/Details'
import { NavLink, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <footer>
          <div className="containernav">
            <NavLink to="/AirQuality" className="iconwrapper">
              Air Quality Index
            </NavLink>
            <NavLink to="/BestAQI" className="iconwrapper">
              Best AQI
            </NavLink>
            <NavLink to="/WorstAQI" className="iconwrapper">
              Worst AQI
            </NavLink>
            <NavLink to="/Details" className="iconwrapper">
              Details
            </NavLink>
          </div>
        </footer>
        <Routes>
          <Route path="/" element={<Navigate replace to="/AirQuality"/>}/>
          <Route path="/AirQuality" element={<AirQuality />}></Route>
          <Route path="/BestAQI" element={<BestAQI />}></Route>
          <Route path="/WorstAQI" element={<WorstAQI />}></Route>
          <Route path="/WorstAirQuality1" element={<WorstAirQuality1 />}></Route>
          <Route path="/WorstAirQuality2" element={<WorstAirQuality2 />}></Route>
          <Route path="/WorstAirQuality3" element={<WorstAirQuality3 />}></Route>
          <Route path="/WorstAirQuality4" element={<WorstAirQuality4 />}></Route>
          <Route path="/WorstAirQuality5" element={<WorstAirQuality5 />}></Route>
          <Route path="/BestAirQuality1" element={<BestAirQuality1 />}></Route>
          <Route path="/BestAirQuality2" element={<BestAirQuality2 />}></Route>
          <Route path="/BestAirQuality3" element={<BestAirQuality3 />}></Route>
          <Route path="/BestAirQuality4" element={<BestAirQuality4 />}></Route>
          <Route path="/BestAirQuality5" element={<BestAirQuality5 />}></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
