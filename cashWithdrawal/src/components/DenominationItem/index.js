import React from 'react'
import './index.css'

const DenominationItem = ({value, withdrawAmount}) => {
  const onClickDenomination = () => {
    withdrawAmount(value)
  }

  return (
    <li className="denomination-item">
      <button className="denomination-button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
