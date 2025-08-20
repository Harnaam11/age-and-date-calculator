import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [targetDate, setTargetDate] = useState('');

  useEffect(() => {
    if (!targetDate) return;

    const tick = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const reset = () => {
    setTargetDate('');
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="card" style={{ backgroundColor: "#ffffff" }}>
      <h2 style={{ color: "black", marginBottom: "10px" }}>⏳ Countdown Timer</h2>
      <p style={{ color: "black" }}>
        Enter a date manually (YYYY-MM-DD HH:MM) or pick from the calendar:
      </p>

      <input
        type="datetime-local"
        value={targetDate}
        onChange={e => setTargetDate(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <button className="btn" onClick={() => {}}>Start</button>
        <button className="btn secondary" onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      {targetDate && (
        <p style={{ marginTop: "12px", fontWeight: "bold", fontFamily: "monospace" }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
