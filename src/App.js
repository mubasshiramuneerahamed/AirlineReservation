import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/">BookedFlights</NavLink></li>
        <li><NavLink to="schedule">Schedule</NavLink></li>
        <li><NavLink to="cancel">Cancel</NavLink></li>
        <li><NavLink to="download">Download</NavLink></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
