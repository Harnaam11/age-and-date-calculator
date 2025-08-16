import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import DateDifference from "./DateDifference";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("countdown");

  return (
    <div className="app-container">
      <h1 className="title">Date Tools</h1>
      <div className="tab-buttons">
        <button
          className={activeTab === "countdown" ? "active" : ""}
          onClick={() => setActiveTab("countdown")}
        >
          Countdown Timer
        </button>
        <button
          className={activeTab === "difference" ? "active" : ""}
          onClick={() => setActiveTab("difference")}
        >
          Date Difference
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "countdown" && <CountdownTimer />}
        {activeTab === "difference" && <DateDifference />}
      </div>
    </div>
  );
}

export default App;
