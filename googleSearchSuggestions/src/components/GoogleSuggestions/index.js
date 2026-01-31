// src/components/GoogleSuggestions/index.js
import React, { useState } from 'react';
import SuggestionItem from '../SuggestionItem';

const GoogleSuggestions = ({ suggestionsList }) => {
  const [searchInput, setSearchInput] = useState('');

  const filteredSuggestions = suggestionsList.filter(suggestion =>
    suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSuggestionClick = suggestion => {
    setSearchInput(suggestion.suggestion);
  };

  return (
    <div className="google-suggestions-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        alt="google logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
        alt="search icon"
      />
      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <ul className="suggestions-list">
        {filteredSuggestions.map(suggestion => (
          <SuggestionItem
            key={suggestion.id}
            suggestion={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          />
        ))}
      </ul>
    </div>
  );
};

export default GoogleSuggestions;
