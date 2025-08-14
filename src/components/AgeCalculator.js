import React, { useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa'; // install react-icons if not installed

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      years--;
    }
    setAge(`${years} year(s) old`);
  };

  const reset = () => {
    setDob('');
    setAge('');
  };

  return (
    <div className="card" style={{ backgroundColor: 'white' }}>
      <h2><FaBirthdayCake /> Age Calculator</h2>
      <p>Enter your birth date to calculate your age.</p>
      <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
      <div>
        <button onClick={calculateAge}>Calculate</button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
      <p>{age}</p>
    </div>
  );
}

export default AgeCalculator;
