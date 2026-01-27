import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({value}) => {
  return (
    <div className="courseContainer">
      <img alt="project" src={value.imageUrl} className="image" />
      <div className="headingContainer">
        <h1 className="courseTitle">{value.projectTitle}</h1>
        <div className="durationContainer">
          <AiFillCalendar className="icon" />
          <p className="durationText">{value.duration}</p>
        </div>
      </div>
      <p className="courseDescription">{value.description}</p>
      <div className="">
        <p className="pp">
          <a target="_blank" href={value.projectUrl}>
            Visit
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
