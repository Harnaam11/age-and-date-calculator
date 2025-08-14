import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import DateDifference from './DateDifference';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'skyblue' }}>Age & Date Calculator</h1>
      <p style={{ color: 'pink' }}>Welcome! Your app is running.</p>
      
      <CountdownTimer />
      <DateDifference />
    </div>
  );
}

export default App;
