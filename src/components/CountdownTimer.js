import React, { useState, useEffect, useRef } from 'react';
import { FaClock } from 'react-icons/fa';

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const tickAudio = useRef(null);

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

      // Play tick sound
      if (tickAudio.current) {
        tickAudio.current.currentTime = 0;
        tickAudio.current.play();
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const reset = () => {
    setTargetDate('');
    setTimeLeft('');
  };

  return (
    <div className="card countdown">
      <h2><FaClock /> Countdown Timer</h2>
      <p>Pick a future date and time to countdown.</p>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={e => setTargetDate(e.target.value)}
      />
      <div>
        <button onClick={() => setTimeLeft('Calculating...')}>Start</button>
        <button onClick={reset} className="reset-btn" style={{ marginLeft: '10px' }}>Reset</button>
      </div>
      {timeLeft && <p><strong>Time Left:</strong> {timeLeft}</p>}

      {/* Tick sound audio */}
      <audio ref={tickAudio} src="https://www.soundjay.com/clock/sounds/clock-tick-1.mp3" />
    </div>
  );
}

export default CountdownTimer;
