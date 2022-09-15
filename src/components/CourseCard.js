import React from "react";
import image1 from "../assets/images/image1.png";
import { ReactComponent as Share } from "../assets/svg/share.svg";
import CallUsBox from "./callUsBox/CallUsBox";

function CourseCard() {
  return (
    <div>
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
            <button className="enroll-btn">إنضم للبرنامج</button>
            <button className="share-btn">
              <Share />
              شارك الدورة
            </button>
          </div>
        </div>
      </div>
      <CallUsBox />
    </div>
  );
}

export default CourseCard;
