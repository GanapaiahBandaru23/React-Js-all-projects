const DestinationItem = props => {
  const {user} = props

  return (
    <li className="">
      <img src={user.imgUrl} alt={user.name} className="image" />
      <p className="para">{user.name}</p>
    </li>
  )
}

export default DestinationItem
