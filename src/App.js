import React from 'react';
import './App.css';
import AgeCalculator from './components/AgeCalculator';
import CountdownTimer from './components/CountdownTimer';
import DateDifference from './components/DateDifference';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom right, #fce4ec, #e0f7fa)' }}>
      {/* Main SEO heading */}
      <h1 style={{ color: 'skyblue' }}>Age & Date Calculator – Free Online Tool</h1>
      {/* Subtitle */}
      <p style={{ color: 'black', marginBottom: '30px' }}>
        All-in-one app: Age, Countdown & Date Difference
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        {/* Section headings for SEO */}
        <section style={{ width: '100%' }}>
          <h2>Age Calculator</h2>
          <AgeCalculator />
        </section>

        <section style={{ width: '100%' }}>
          <h2>Countdown Timer</h2>
          <CountdownTimer />
        </section>

        <section style={{ width: '100%' }}>
          <h2>Date Difference Calculator</h2>
          <DateDifference />
        </section>
      </div>
    </div>
  );
}

export default App;
