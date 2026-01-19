import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const objj = {
  author: 'Dan Abramov',
  avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
  id: 1,
  imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
  title: 'React v16.9.0 and the Roadmap Update',
  topic: 'React.js',
}

const BlogItem = props => {
  const {listt} = props

  return (
    <Link to={`/blogs/${listt.id}`}>
      <div className="container">
        <div className="cc">
          <img src={listt.imageUrl} className="image" />
        </div>

        <div className="">
          <p className="">{listt.topic}</p>
          <h1 className="">{listt.title}</h1>
          <div className="container2">
            <img className="avatar" src={listt.avatarUrl} />
            <p className="">{listt.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
