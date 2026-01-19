// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  const ll = {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  }
  return (
    <div className="">
      <ul className="">
      {blogsList.map((eachItem)=>{
        return <BlogItem ll={eachItem} key={eachItem.id} />
      })}
        
      </ul>
    </div>
  )
}
export default BlogList
