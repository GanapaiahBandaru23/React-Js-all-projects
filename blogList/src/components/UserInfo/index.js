// Write your JS code here
import './index.css'

const UserInfo = props => {
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1>Wade Warren</h1>
      <p className="para">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
