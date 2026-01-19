import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave logo"
          />
          <h1 className="logo-text">Wave</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
