// Write your code here
import React, {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  goToPreviousReview = () => {
    this.setState(prevState => {
      if (prevState.currentIndex > 0) {
        return {currentIndex: prevState.currentIndex - 1}
      }
      return null
    })
  }

  goToNextReview = () => {
    this.setState(prevState => {
      if (prevState.currentIndex < this.props.reviewsList.length - 1) {
        return {currentIndex: prevState.currentIndex + 1}
      }
      return null
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[currentIndex]

    return (
      <div className="reviews-carousel-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-card">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.goToPreviousReview}
            disabled={currentIndex === 0}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-content">
            <img src={imgUrl} alt={username} className="profile-image" />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.goToNextReview}
            disabled={currentIndex === reviewsList.length - 1}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
