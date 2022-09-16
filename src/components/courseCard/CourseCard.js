import React from "react";
import "./courseCard.css";
import image1 from "../../assets/images/image1.png";
import { ReactComponent as Share } from "../../assets/svg/share.svg";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image1} alt="course" />
      </div>
      <div className="card-content">
        <p className="title">عنوان البرنامج</p>
        <p className="description">
          دوربرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميدوربرنامج الاكاد
          الاكاد يميبر يميبر نامج الاكاديميدوربرنامج الاكاد الاكاد يميبر.
        </p>
        <div className="actions">
          <Link to={"/course-details"} className="enroll-btn">
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
