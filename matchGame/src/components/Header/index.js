import React from 'react'

const Header = ({score, time}) => (
  <div className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      alt="website logo"
    />
    <div className="score-timer">
      <p className="score">Score: {score}</p>
      <div className="timer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{time} sec</p>
      </div>
    </div>
  </div>
)

export default Header
