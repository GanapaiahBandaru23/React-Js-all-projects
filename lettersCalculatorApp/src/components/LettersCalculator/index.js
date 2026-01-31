import React, { useState } from 'react';
import './index.css';

const LettersCalculator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="letters-calculator-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
        className="calculator-image"
      />
      <div className="input-section">
        <h1 className="heading">Calculate the Letters you enter</h1>
        <label htmlFor="phraseInput" className="input-label">
          Enter the phrase
        </label>
        <input
          id="phraseInput"
          type="text"
          className="input-field"
          placeholder="Enter the phrase"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p className="letters-count">No.of letters: {inputValue.length}</p>
      </div>
    </div>
  );
};

export default LettersCalculator;
