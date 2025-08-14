import React, { useState } from 'react';

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

  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid pink', borderRadius: '10px', backgroundColor: '#e0f7ff' }}>
      <h2>Date Difference Calculator</h2>
      <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
      <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
      <button onClick={calculateDifference} style={{ marginLeft: '10px', padding: '5px' }}>Calculate</button>
      <p>{difference}</p>
    </div>
  );
}

export default DateDifference;
