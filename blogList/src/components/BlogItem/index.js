// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {ll} = props

  return (
    <li>
      <div className="c1">
        <h1 className="">{ll.title}</h1>
        <p className="date">{ll.publishedDate}</p>
      </div>
      <p>{ll.description}</p>
      <hr className='line'/>
    </li>
  )
}

export default BlogItem
