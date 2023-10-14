import React, { useState } from 'react';
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    const birthdateArray = birthdate.split('-');
    const birthYear = parseInt(birthdateArray[0]);
    const birthMonth = parseInt(birthdateArray[1]) - 1; // Months are zero-indexed
    const birthDay = parseInt(birthdateArray[2])
    const today = new Date();
    const ageDate = new Date(today - new Date(birthYear, birthMonth, birthDay));
    const calculatedAge = ageDate.getUTCFullYear() - 1970;
    setAge(calculatedAge);
  };
  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
};
export default AgeCalculator;