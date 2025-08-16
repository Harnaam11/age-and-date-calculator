import React, { useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

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
    <div className="card" style={{ backgroundColor: '#ffe6f0' }}>
      <h2 style={{ color: 'black', marginBottom: '10px' }}><FaBirthdayCake /> Age Calculator</h2>
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
