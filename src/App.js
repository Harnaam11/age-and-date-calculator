import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import DateDifference from "./DateDifference";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("countdown");

  return (
    <div className="app">
      <h1 className="app-title">Time Tools</h1>
      <div className="button-container">
        <button
          className={`toggle-btn ${activeComponent === "countdown" ? "active" : ""}`}
          onClick={() => setActiveComponent("countdown")}
        >
          Countdown Timer
        </button>
        <button
          className={`toggle-btn ${activeComponent === "difference" ? "active" : ""}`}
          onClick={() => setActiveComponent("difference")}
        >
          Date Difference
        </button>
      </div>

      <div className="content">
        {activeComponent === "countdown" ? <CountdownTimer /> : <DateDifference />}
      </div>
    </div>
  );
}

export default App;
