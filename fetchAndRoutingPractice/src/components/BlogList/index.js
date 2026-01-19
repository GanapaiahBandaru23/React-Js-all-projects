import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }
  componentDidMount = () => {
    this.loadList()
  }
  loadList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const newData = data.map(each => {
      return {
        author: each.author,
        avatarUrl: each.avatar_url,
        topic: each.topic,
        id: each.id,
        imageUrl: each.image_url,
        title: each.title,
      }
    })
    this.setState({blogsList: newData, isLoading: false})
  }
  render() {
    const {blogsList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div>
        {blogsList.map(each => (
          <BlogItem key={each.id} listt={each} />
        ))}
      </div>
    )
  }
}

export default BlogList
