import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import DateDifference from "./DateDifference";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("countdown");

  return (
    <div className="app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", background: "linear-gradient(to bottom right, #fce4ec, #e0f7fa)" }}>
      
      {/* Main title */}
      <h1 className="app-title" style={{ color: "skyblue", marginBottom: "30px" }}>Time Tools – Free Online</h1>

      {/* Toggle buttons */}
      <div className="button-container" style={{ marginBottom: "40px", display: "flex", gap: "20px" }}>
        <button
          className={`toggle-btn ${activeComponent === "countdown" ? "active" : ""}`}
          onClick={() => setActiveComponent("countdown")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: activeComponent === "countdown" ? "deepskyblue" : "skyblue",
            color: "white",
            transition: "all 0.3s ease"
          }}
        >
          Countdown Timer
        </button>
        <button
          className={`toggle-btn ${activeComponent === "difference" ? "active" : ""}`}
          onClick={() => setActiveComponent("difference")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: activeComponent === "difference" ? "deepskyblue" : "skyblue",
            color: "white",
            transition: "all 0.3s ease"
          }}
        >
          Date Difference
        </button>
      </div>

      {/* Content */}
      <div className="content" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: "400px" }}>
        {activeComponent === "countdown" ? <CountdownTimer /> : <DateDifference />}
      </div>
    </div>
  );
}

export default App;
