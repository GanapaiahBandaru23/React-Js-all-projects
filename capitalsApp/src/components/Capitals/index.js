import React, {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  handleChange = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  render() {
    const {selectedCapitalId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      capital => capital.id === selectedCapitalId,
    ).country

    return (
      <div className="capitals-app-container">
        <h1 className="main-heading">Countries And Capitals</h1>
        <p className="sub-heading">is capital of which country</p>
        <select
          className="capital-select"
          value={selectedCapitalId}
          onChange={this.handleChange}
        >
          {countryAndCapitalsList.map(capital => (
            <option key={capital.id} value={capital.id}>
              {capital.capitalDisplayText}
            </option>
          ))}
        </select>
        <p className="country-display">Country: {selectedCountry}</p>
      </div>
    )
  }
}

export default Capitals
