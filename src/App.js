// App.js
import React from "react";
import AgeCalculator from "./components/AgeCalculator";
import CountdownTimer from "./components/CountdownTimer";
import DateDifference from "./components/DateDifference";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Time Tools – Free Online Calculator</h1>

      <div className="content">
        <AgeCalculator />
        <CountdownTimer />
        <DateDifference />
      </div>
    </div>
  );
}

export default App;
