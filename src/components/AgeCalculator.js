import React, { useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const isValidDate = (dateString) => {
    // Check format YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const calculateAge = () => {
    if (!dob || !isValidDate(dob)) {
      setAge("❌ Please enter a valid date in YYYY-MM-DD format");
      return;
    }

    const today = new Date();
    const birthDate = new Date(dob);

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
    <div className="card" style={{ backgroundColor: '#ffe6f0'
