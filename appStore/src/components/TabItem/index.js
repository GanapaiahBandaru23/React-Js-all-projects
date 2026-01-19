import React from 'react';
import './index.css';

const TabItem = ({ isActive, displayText, changeTab, tabId }) => {
  const handleClick = () => {
    changeTab(tabId);
  };

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
