// CountdownTimer.js
import React, { useState, useEffect } from "react";
import { FaHourglassHalf } from "react-icons/fa";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const reset = () => {
    setTargetDate("");
    setTimeLeft({});
  };

  return (
    <div className="card" style={{ backgroundColor: "#fffbe6" }}>
      <h1>
        <FaHourglassHalf /> Countdown Timer
      </h1>
      <p>Enter a date and time to start a countdown instantly.</p>

      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />

      <div>
        <button onClick={reset} className="btn">Reset</button>
      </div>

      {targetDate && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
