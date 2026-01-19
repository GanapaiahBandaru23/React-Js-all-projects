import React, {useState} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const CashWithdrawal = ({denominationsList}) => {
  const [balance, setBalance] = useState(2000)

  const withdrawAmount = value => {
    setBalance(prevBalance =>
      prevBalance >= value ? prevBalance - value : prevBalance,
    )
  }

  return (
    <div className="cash-withdrawal-container">
      <p className="balance-title">Your Balance</p>
      <p className="balance-amount">{balance}</p>
      <p className="withdraw-title">Withdraw</p>
      <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
      <ul className="denominations-list">
        {denominationsList.map(denomination => (
          <DenominationItem
            key={denomination.id}
            value={denomination.value}
            withdrawAmount={withdrawAmount}
          />
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal
