import React from "react";
import "./courseCard.css";
import image1 from "../../assets/images/image1.png";
import { ReactComponent as Share } from "../../assets/svg/share.svg";
import { ReactComponent as Calendar } from "../../assets/svg/calendar.svg";
import { ReactComponent as Clock } from "../../assets/svg/clockFill.svg";
import { Link } from "react-router-dom";

function CourseCard({ program }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image1} alt="course" />
        <div className="card-tags">
          {program.type && (
            <div className="tag">
              <span>{program.type}</span>
            </div>
          )}
          {program.duration && (
            <div className="tag">
              <Clock className="icon" />
              <span>{program.duration}</span>
            </div>
          )}
          {program.start_date && (
            <div className="tag">
              <Calendar className="icon" />
              <span>تبدأ في {program.start_date}</span>
            </div>
          )}
        </div>
      </div>
      <div className="card-content">
        <p className="title">{program.title}</p>
        <p className="description">{program.description}</p>
        <div className="actions">
          <Link
            to={`/course-details?course_id=${program.id}`}
            className="enroll-btn"
          >
            إنضم للبرنامج
          </Link>
          <button className="share-btn">
            <Share />
            شارك الدورة
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
