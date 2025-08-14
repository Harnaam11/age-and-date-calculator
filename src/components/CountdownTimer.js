import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!targetDate) return;
      const now = new Date();
      const future = new Date(targetDate);
      const diff = future - now;

      if (diff <= 0) {
        setTimeLeft("Time's up!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const reset = () => {
    setTargetDate('');
    setTimeLeft('');
  };

  return (
    <div className="card" style={{ backgroundColor: '#ffe6f0' }}>
      <h2><FaClock /> Countdown Timer</h2>
      <p>Pick a future date and time to countdown.</p>
      <input type="datetime-local" value={targetDate} onChange={e => setTargetDate(e.target.value)} />
      <div>
        <button onClick={() => setTimeLeft('Calculating...')}>Start</button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
      <p>{timeLeft}</p>
    </div>
  );
}

export default CountdownTimer;
