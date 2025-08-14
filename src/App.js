import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="app-container">
      <h1>Age & Date Calculator</h1>
      <p>Enter your birth date:</p>
      <input 
        type="date" 
        value={birthDate} 
        onChange={(e) => setBirthDate(e.target.value)} 
        className="date-input"
      />
      <button onClick={calculateAge} className="calculate-button">Calculate Age</button>

      {age && (
        <div className="result">
          <h2>Your Age:</h2>
          <p>{age.years} years, {age.months} months, {age.days} days</p>
        </div>
      )}
    </div>
  );
}

export default App;
