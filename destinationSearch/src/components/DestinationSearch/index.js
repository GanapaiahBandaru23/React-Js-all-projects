import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchItem: ''}

  onChangeFunction = event => {
    this.setState({searchItem: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchItem} = this.state
    const newList = destinationsList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(searchItem)
    })

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div >
        <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png' alt='search icon'/>
        </div>
        <input
          type="Search"
          onChange={this.onChangeFunction}
          value={searchItem}
        />
        <ul className="">
          {newList.map(eachItem => {
            return <DestinationItem user={eachItem} key={eachItem.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
