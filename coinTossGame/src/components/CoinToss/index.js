import React, {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
    currentImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        totalCount: prevState.totalCount + 1,
        currentImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        totalCount: prevState.totalCount + 1,
        currentImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, totalCount, currentImage} = this.state
    return (
      <div className="coin-toss-container">
        <h1 className="title">Coin Toss Game</h1>
        <p className="result-text">Heads (or) Tails</p>
        <img
          src={currentImage}
          alt="toss result"
          className="toss-result-image"
        />
        <button type="button" className="toss-button" onClick={this.tossCoin}>
          Toss Coin
        </button>
        <div className="results-container">
          <p className="result">Total: {totalCount}</p>
          <p className="result">Heads: {headsCount}</p>
          <p className="result">Tails: {tailsCount}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
