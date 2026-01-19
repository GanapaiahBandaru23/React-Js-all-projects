import React, {Component} from 'react'
import './index.css'

const playIcon = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const pauseIcon = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetIcon = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    timerLimit: 25,
    elapsedTime: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  toggleTimer = () => {
    const {isRunning} = this.state
    if (isRunning) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(this.updateElapsedTime, 1000)
    }
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  updateElapsedTime = () => {
    this.setState(prevState => {
      if (prevState.elapsedTime >= prevState.timerLimit * 60) {
        clearInterval(this.intervalId)
        return {isRunning: false, elapsedTime: prevState.timerLimit * 60}
      }
      return {elapsedTime: prevState.elapsedTime + 1}
    })
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false, elapsedTime: 0, timerLimit: 25})
  }

  incrementTimer = () => {
    this.setState(prevState => ({timerLimit: prevState.timerLimit + 1}))
  }

  decrementTimer = () => {
    this.setState(prevState => ({
      timerLimit: prevState.timerLimit > 1 ? prevState.timerLimit - 1 : 1,
    }))
  }

  getFormattedTime = () => {
    const {timerLimit, elapsedTime} = this.state
    const totalRemainingSeconds = timerLimit * 60 - elapsedTime
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = totalRemainingSeconds % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    const {isRunning, timerLimit, elapsedTime} = this.state
    const timerStatus = isRunning ? 'Running' : 'Paused'
    const playPauseIcon = isRunning ? pauseIcon : playIcon
    const playPauseText = isRunning ? 'Pause' : 'Start'

    const isDisabled = elapsedTime > 0

    return (
      <div className="digital-timer-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-display">
          <h1 className="timer">{this.getFormattedTime()}</h1>
          <p className="status">{timerStatus}</p>
        </div>
        <div className="control-buttons">
          <button className="control-button" onClick={this.toggleTimer}>
            <img
              src={playPauseIcon}
              alt={playPauseText === 'Pause' ? 'pause icon' : 'play icon'}
              className="icon"
            />
            {playPauseText}
          </button>
          <button className="control-button" onClick={this.resetTimer}>
            <img src={resetIcon} alt="reset icon" className="icon" />
            Reset
          </button>
        </div>
        <p className="set-timer-limit">Set Timer limit</p>
        <div className="set-timer-limit">
          <button
            className="limit-button"
            onClick={this.incrementTimer}
            disabled={isDisabled}
          >
            +
          </button>
          <p className="timer-limit">{timerLimit}</p>
          <button
            className="limit-button"
            onClick={this.decrementTimer}
            disabled={isDisabled}
          >
            -
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
