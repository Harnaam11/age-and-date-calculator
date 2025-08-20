import React, { useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} year(s), ${months} month(s), and ${days} day(s) old`);
  };

  const reset = () => {
    setDob('');
    setAge('');
  };

  return (
    <div className="card" style={{ backgroundColor: '#ffe6f0' }}>
      <h2 style={{ color: 'black', marginBottom: '10px' }}>
        <FaBirthdayCake /> Age Calculator
      </h2>
      <p style={{ color: 'black' }}>
        Enter your birth date manually or pick from the calendar:
      </p>

      <input
        type="date"
        value={dob}
        onChange={e => setDob(e.target.value)}
        placeholder="YYYY-MM-DD"
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={calculateAge} className="btn">Calculate</button>
        <button onClick={reset} className="btn secondary" style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>

      {age && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{age}</p>}
    </div>
  );
}

export default AgeCalculator;
