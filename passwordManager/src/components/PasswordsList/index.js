import React from 'react'
import PropTypes from 'prop-types'

const PasswordItem = ({password, showpass, onDelete}) => (
  <li className="password-item">
    <div className="circular-avatar">
      {password.link.charAt(0).toUpperCase()}
    </div>
    <div className="password-details">
      <p>{password.link}</p>
      <p>{password.username}</p>
      {showpass ? (
        <p>{password.pass}</p>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}
    </div>
    <button
      className="delete-button"
      onClick={() => onDelete(password.id)}
      data-testid="delete"
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
      />
    </button>
  </li>
)

PasswordItem.propTypes = {
  password: PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
  }).isRequired,
  showpass: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const PasswordsList = ({passwordsList, listElementDelete, showpass}) => (
  <ul className="passwords-list">
    {passwordsList.map(password => (
      <PasswordItem
        key={password.id}
        password={password}
        showpass={showpass}
        onDelete={listElementDelete}
      />
    ))}
  </ul>
)

PasswordsList.propTypes = {
  passwordsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      pass: PropTypes.string.isRequired,
    }),
  ).isRequired,
  listElementDelete: PropTypes.func.isRequired,
  showpass: PropTypes.bool.isRequired,
}

export default PasswordsList
