import React from 'react'
import './index.css'

const HistoryItem = ({historyItem, deleteHistoryItem}) => {
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <div className="item-info">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="title-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <p className="time-accessed">{timeAccessed}</p>
      </div>
      <button className="delete-button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
