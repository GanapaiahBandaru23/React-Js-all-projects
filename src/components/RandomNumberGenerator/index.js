// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {count: ''}
  renderNumber = () => {
    let value = Math.ceil(Math.random() * 100)
    this.setState({count: value})
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 t0 100
          </p>
          <button className="buttonEl" onClick={this.renderNumber}>
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
