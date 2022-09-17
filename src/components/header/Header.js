import React from "react";
import "./header.css";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { Link } from "react-router-dom";

function Header({
  id,
  title,
  description,
  image,
  start_date,
  duration,
  learning_average,
}) {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="description-track">
            <Calendar className="icon" />
            <p>
              يبدأ البرنامج في تاريخ{" "}
              <span style={{ fontWeight: "bold" }}>{start_date}</span>
            </p>
          </div>
          <div className="description-track">
            <Clock className="icon" />
            <p>
              مدة البرنامج{" "}
              <span style={{ fontWeight: "bold" }}>{duration}</span>، بمعدل{" "}
              <span style={{ fontWeight: "bold" }}>{learning_average}</span>
            </p>
          </div>
        </div>
        <Link to={`/course?course_id=${id}`} className="enroll-course-btn">
          انضم للبرنامج التدريبي
        </Link>
      </div>
      <svg
        width="588"
        height="503"
        viewBox="0 0 588 503"
        fill="url(#imgpattern)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M584 499H12V36.7648H373.179L436.126 4H584V499Z"
          stroke="#153C3F"
          stroke-width="8"
        />
        <path
          d="M4 491V44.5H348L405 11H576V491H4Z"
          stroke="#00EC8B"
          stroke-width="8"
        />
        <path d="M12 33L12 500" stroke="#153C3F" stroke-width="8" />
        <defs>
          <pattern id="imgpattern" x="0" y="0" width="1" height="1">
            <image width="588" height="503" xlinkHref={image} />
          </pattern>
        </defs>
      </svg>
    </div>
  );
}

export default Header;
