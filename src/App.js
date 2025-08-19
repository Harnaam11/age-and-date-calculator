import React, { useState } from "react";
import AgeCalculator from "./components/AgeCalculator";
import CountdownTimer from "./components/CountdownTimer";
import DateDifference from "./components/DateDifference";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("age"); // default Age Calculator

  return (
    <div className="app">
      <h1 className="app-title">Age & Date Calculator – Free Online Tool</h1>
      <p className="subtitle">Instant Age, Countdown Timer, and Date Difference — all in one page.</p>

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

      {/* SEO/helper content below the tools */}
      <section className="seo">
        <h2>About This Age & Date Calculator</h2>
        <p>
          Use our free Age & Date Calculator to quickly <strong>calculate your age in years, months, and days</strong>,
          start a <strong>countdown timer</strong> to any event, and <strong>find the difference between two dates</strong>.
          It’s fast, accurate, and mobile-friendly.
        </p>

        <h3>Popular uses</h3>
        <ul>
          <li>Check your exact age for forms and applications.</li>
          <li>Create a countdown for birthdays, exams, trips, or launches.</li>
          <li>Measure days between two dates for projects and deadlines.</li>
        </ul>

        <h3>FAQs</h3>

        <details>
          <summary>Is the age calculation accurate?</summary>
          <p>Yes. We account for months of different lengths and adjust days/months so you get years, months, and days precisely.</p>
        </details>

        <details>
          <summary>Does Date Difference work across leap years?</summary>
          <p>Yes, date math uses the actual calendar, so leap years are handled correctly.</p>
        </details>

        <details>
          <summary>Can I start a countdown to a past date?</summary>
          <p>You can select any date/time. If it’s in the past, the timer shows 0d 0h 0m 0s.</p>
        </details>
      </section>
    </div>
  );
}

export default App;
