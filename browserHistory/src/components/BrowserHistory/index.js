import React, {useState} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const BrowserHistory = ({historyList}) => {
  const [searchInput, setSearchInput] = useState('')
  const [historyItems, setHistoryItems] = useState(historyList)

  const handleSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const deleteHistoryItem = id => {
    const updatedHistoryItems = historyItems.filter(item => item.id !== id)
    setHistoryItems(updatedHistoryItems)
  }

  const filteredHistoryItems = historyItems.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="browser-history-app">
      <header className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search history"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
      </header>
      <div className="history-container">
        {filteredHistoryItems.length > 0 ? (
          <ul className="history-list">
            {filteredHistoryItems.map(item => (
              <HistoryItem
                key={item.id}
                historyItem={item}
                deleteHistoryItem={deleteHistoryItem}
              />
            ))}
          </ul>
        ) : (
          <div className="empty-history-view">
            <p className="no-history-text">There is no history to show</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowserHistory
