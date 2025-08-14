import React, { useState, useEffect, useRef } from 'react';
import { FaClock } from 'react-icons/fa';

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const tickAudio = useRef(null);

  useEffect(() => {
    if (!isRunning) return; // Don't run until Start is clicked

    const interval = setInterval(() => {
      if (!targetDate) return;

      const now = new Date();
      const future = new Date(targetDate);
      const diff = future - now;

      if (diff <= 0) {
        setTimeLeft("Time's up!");
        setIsRunning(false);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // Play tick sound
      if (tickAudio.current) {
        tickAudio.current.currentTime = 0;
        tickAudio.current.play().catch(() => {});
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, isRunning]);

  const startCountdown = () => {
    if (targetDate) {
      setIsRunning(true);
      setTimeLeft('Calculating...');
    }
  };

  const reset = () => {
    setTargetDate('');
    setTimeLeft('');
    setIsRunning(false);
  };

  return (
    <div className="card countdown" style={{ backgroundColor: '#ffe6f0' }}>
      <h2 style={{ color: 'black' }}><FaClock /> Countdown Timer</h2>
      <p style={{ color: 'black' }}>Pick a future date and time to countdown.</p>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={e => setTargetDate(e.target.value)}
      />
      <div>
        <button onClick={startCountdown}>Start</button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
      {timeLeft && <p><strong>Time Left:</strong> {timeLeft}</p>}

      {/* Tick sound audio */}
      <audio ref={tickAudio} src="https://www.soundjay.com/clock/sounds/clock-tick-1.mp3" />
    </div>
  );
}

export default CountdownTimer;
