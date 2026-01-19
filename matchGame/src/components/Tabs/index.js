import React from 'react'

const Tabs = ({tabsList, activeTab, onTabClick}) => (
  <ul className="tabs-list">
    {tabsList.map(tab => (
      <li key={tab.tabId}>
        <button
          className={`tab-button ${activeTab === tab.tabId ? 'active' : ''}`}
          onClick={() => onTabClick(tab.tabId)}
        >
          {tab.displayText}
        </button>
      </li>
    ))}
  </ul>
)

export default Tabs
