import React, {Component} from 'react'
import {Chrono} from 'react-chrono'
import {AiFillClockCircle, AiFillCalendar} from 'react-icons/ai'
import {TimelineContainer} from '../styledComponent'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  state = {
    titles: [],
  }

  componentDidMount() {
    const {timelineItemsList} = this.props
    const titles = timelineItemsList.map(value => ({title: value.title}))
    this.setState({
      titles: titles,
    })
  }

  render() {
    const {titles} = this.state
    const {timelineItemsList} = this.props
    return (
      <TimelineContainer>
        <h1>
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
        {titles.length > 0 ? (
          <Chrono items={titles} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(value =>
              value.categoryId === 'COURSE' ? (
                <CourseTimelineCard key={value.id} value={value} />
              ) : (
                <ProjectTimelineCard key={value.id} value={value} />
              ),
            )}
          </Chrono>
        ) : (
          <p>Loading timeline...</p>
        )}
      </TimelineContainer>
    )
  }
}

export default TimelineView
