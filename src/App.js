import React, { useState } from "react";
import AgeCalculator from "./AgeCalculator";
import CountdownTimer from "./CountdownTimer";
import DateDifference from "./DateDifference";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("age"); // default Age Calculator

  return (
    <div className="app">
      <h1 className="app-title">Time Tools – Free Online Calculator</h1>

      <div className="button-container">
        <button
          className={`toggle-btn ${activeComponent === "age" ? "active" : ""}`}
          onClick={() => setActiveComponent("age")}
        >
          Age Calculator
        </button>
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
        {activeComponent === "age" && <AgeCalculator />}
        {activeComponent === "countdown" && <CountdownTimer />}
        {activeComponent === "difference" && <DateDifference />}
      </div>
    </
