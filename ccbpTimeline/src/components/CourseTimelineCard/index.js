import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({value}) => {
  return (
    <div className="courseContainer">
      <div className="headingContainer">
        <h1 className="courseTitle">{value.courseTitle}</h1>
        <div className="durationContainer">
          <AiFillClockCircle className="icon" />
          <p className="durationText">{value.duration}</p>
        </div>
      </div>
      <p className="courseDescription">{value.description}</p>

      <div className="ul">
        {value.tagsList.map(val => {
          return (
            <p className="para" key={val.id}>
              {val.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default CourseTimelineCard
