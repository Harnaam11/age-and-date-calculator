import React, { useState, useEffect } from 'react';

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

  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid skyblue', borderRadius: '10px', backgroundColor: '#ffe6f0' }}>
      <h2>Countdown Timer</h2>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px' }}
      />
      <p>{timeLeft}</p>
    </div>
  );
}

export default CountdownTimer;
