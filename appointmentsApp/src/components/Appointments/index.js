import React, {Component} from 'react'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isStarredFilterActive: false,
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onDateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault() // Prevent default form submission
    const {titleInput, dateInput} = this.state
    if (titleInput && dateInput) {
      // Ensure non-empty values are provided
      const newAppointment = {
        id: new Date().getTime(),
        title: titleInput,
        date: dateInput,
        isStarred: false,
      }

      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        titleInput: '',
        dateInput: '',
      }))
    }
  }

  toggleStarredStatus = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(appointment =>
        appointment.id === id
          ? {...appointment, isStarred: !appointment.isStarred}
          : appointment,
      ),
    }))
  }

  toggleStarredFilter = () => {
    this.setState(prevState => ({
      isStarredFilterActive: !prevState.isStarredFilterActive,
    }))
  }

  getFilteredAppointments = () => {
    const {appointmentsList, isStarredFilterActive} = this.state
    return isStarredFilterActive
      ? appointmentsList.filter(appointment => appointment.isStarred)
      : appointmentsList
  }

  render() {
    const {titleInput, dateInput, isStarredFilterActive} = this.state
    const filteredAppointments = this.getFilteredAppointments()

    return (
      <div className="appointments-app">
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          alt="appointments"
        />
        <div className="appointments-container">
          <h1 className="appointments-heading">Add Appointment</h1>
          <form className="appointment-form" onSubmit={this.addAppointment}>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input-field"
              placeholder="Title"
              value={titleInput}
              onChange={this.onTitleChange}
            />
            <label className="input-label" htmlFor="date">
              DATE
            </label>
            <input
              type="date"
              id="date"
              className="input-field"
              value={dateInput}
              onChange={this.onDateChange}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="appointments-list-container">
            <h1 className="appointments-list-heading">Appointments</h1>
            <button
              type="button"
              className={`starred-filter-button ${
                isStarredFilterActive ? 'active' : ''
              }`}
              onClick={this.toggleStarredFilter}
            >
              Starred
            </button>
            <ul className="appointments-list">
              {filteredAppointments.map(appointment => (
                <AppointmentItem
                  key={appointment.id}
                  appointmentDetails={appointment}
                  toggleStarredStatus={this.toggleStarredStatus}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
