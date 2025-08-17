import React, { useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!dob) return;
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if days are negative
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Adjust if months are negative
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
      <h1 style={{ color: 'black', marginBottom: '10px' }}>
        <FaBirthdayCake /> Free Online Age Calculator
      </h1>
      <p style={{ color: 'black' }}>
        Enter your birth date to instantly calculate your age in years, months, and days.
      </p>

      <input 
        type="date" 
        value={dob} 
        onChange={e => setDob(e.target.value)} 
        style={{ display: 'block', margin: '10px auto', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div>
        <button onClick={calculateAge} className="btn">Calculate</button>
        <button onClick={reset} style={{ marginLeft: '10px' }} className="btn">Reset</button>
      </div>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{age}</p>
    </div>
  );
}

export default AgeCalculator;
