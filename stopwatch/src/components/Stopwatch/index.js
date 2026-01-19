import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedTime: 0,
    isTimerOn: false,
  }

  startTimer = () => {
    this.intervalId = setInterval(this.incrementElapsedTime, 1000)
    this.setState({isTimerOn: true})
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerOn: false})
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({elapsedTime: 0, isTimerOn: false})
  }

  incrementElapsedTime = () => {
    this.setState(prevState => ({elapsedTime: prevState.elapsedTime + 1}))
  }

  getTimeinFormat = elapsedTime => {
    const minutes = Math.floor(elapsedTime / 60)
    const seconds = elapsedTime % 60

    const Min = minutes < 10 ? `0${minutes}` : minutes
    const Sec = seconds < 10 ? `0${seconds}` : seconds

    return `${Min}:${Sec}`
  }

  render() {
    const {isTimerOn, elapsedTime} = this.state
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timerContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="img"
              alt="stopwatch"
            />
            <p className=""> Timer</p>
          </div>
          <h1 className="">{this.getTimeinFormat(elapsedTime)}</h1>
          <div className="buttonsContainer">
            <button
              onClick={this.startTimer}
              disabled={isTimerOn}
              className="b1"
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              disabled={!isTimerOn}
              className="b2"
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              disabled={isTimerOn && elapsedTime === 0}
              className="b3"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
