// src/components/SuggestionItem/index.js
import React from 'react';

const SuggestionItem = ({ suggestion, onClick }) => {
  return (
    <li className="suggestion-item" onClick={onClick}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
      <p>{suggestion.suggestion}</p>
    </li>
  );
};

export default SuggestionItem;
