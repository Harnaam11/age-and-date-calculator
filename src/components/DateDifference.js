import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function DateDifference() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
    if (!date1 || !date2) return;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDifference(`${diffDays} day(s)`);
  };

  const reset = () => {
    setDate1('');
    setDate2('');
    setDifference('');
  };

  return (
    <div className="card" style={{ backgroundColor: '#e0f7ff' }}>
      <h2 style={{ color: 'black' }}><FaCalendarAlt /> Date Difference Calculator</h2>
      <p style={{ color: 'black' }}>Enter two dates to find the difference in days.</p>

      <input 
        type="date" 
        value={date1} 
        onChange={e => setDate1(e.target.value)} 
      />
      <input 
        type="date" 
        value={date2} 
        onChange={e => setDate2(e.target.value)} 
      />

      <div>
        <button onClick={calculateDifference}>Calculate</button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      {difference && <p><strong>Difference:</strong> {difference}</p>}
    </div>
  );
}

export default DateDifference;
