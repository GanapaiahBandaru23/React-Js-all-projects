import React, {useState} from 'react'
import './index.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = event => {
    setLastName(event.target.value)
  }

  const validateFirstName = () => {
    if (firstName === '') {
      setFirstNameError(true)
    } else {
      setFirstNameError(false)
    }
  }

  const validateLastName = () => {
    if (lastName === '') {
      setLastNameError(true)
    } else {
      setLastNameError(false)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    validateFirstName()
    validateLastName()
    if (firstName !== '' && lastName !== '') {
      setIsSubmitted(true)
    }
  }

  const handleAnotherResponse = () => {
    setFirstName('')
    setLastName('')
    setFirstNameError(false)
    setLastNameError(false)
    setIsSubmitted(false)
  }

  return (
    <div className="registration-form-container">
    <h1 >Registration</h1>
      {isSubmitted ? (
        <div className="success-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-icon"
          />
          <p>Submitted Successfully</p>
          <button
            type="button"
            className="submit-another-btn"
            onClick={handleAnotherResponse}
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={validateFirstName}
              className="input-field"
            />
            {firstNameError && <p className="error-message">Required</p>}
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={validateLastName}
              className="input-field"
            />
            {lastNameError && <p className="error-message">Required</p>}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm
