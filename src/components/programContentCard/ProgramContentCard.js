import React from "react";
import { Link } from "react-router-dom";
import "./programContentCard.css";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";

function ProgramContentCard({ id, title, description, image }) {
  return (
    <div className="program-content-card">
      <img src={image} alt="course" />
      <div className="image-overlay-bg">
        <div className="image-overlay-content">
          <p className="overlay-title mb-[16px]">{title}</p>
          <p className="overlay-description mb-[16px]">{description}</p>
          <Link to={"/academy-lessons/course-details"} className="overlay-btn">
            <Book className="overlay-btn-icon" />
            <span>مقال</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramContentCard;
