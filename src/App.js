import React from 'react';
import './App.css';
import AgeCalculator from './components/AgeCalculator';
import CountdownTimer from './components/CountdownTimer';
import DateDifference from './components/DateDifference';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom right, #fce4ec, #e0f7fa)' }}>
      <h1 style={{ color: 'skyblue' }}>Age & Date Calculator</h1>
      <p style={{ color: 'pink', marginBottom: '30px' }}>All-in-one app: Age, Countdown & Date Difference</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <AgeCalculator />
        <CountdownTimer />
        <DateDifference />
      </div>
    </div>
  );
}

export default App;
