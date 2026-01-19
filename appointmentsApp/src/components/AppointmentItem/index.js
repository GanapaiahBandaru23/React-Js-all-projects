// Write your code here
import React from 'react'
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarredStatus} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleStarredStatus(id)
  }

  return (
    <li className="appointment-item">
      <div className="appointment-details">
        <p className="appointment-title">{title}</p>
        <p className="appointment-date">
          {format(new Date(date), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
      <button
        type="button"
        className="star-button"
        onClick={onClickStar}
        data-testid="star"
      >
        <img src={starImgUrl} alt="star" className="star-icon" />
      </button>
    </li>
  )
}

export default AppointmentItem
