import React from "react";
import "./scoreBox.css";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";
import { ReactComponent as Award } from "../../assets/svg/award.svg";

function ScoreBox({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) {
  return (
    <div className="custom-shadow-box">
      <div className="scoreBox">
        <div className="score-item">
          <Clock className="icon" />
          <div className="score-item-content">
            <p className="title">{title1}</p>
            <p className="description">{description1}</p>
          </div>
        </div>
        <div className="score-item">
          <Book className="icon" />
          <div className="score-item-content">
            <p className="title">{title2}</p>
            <p className="description">{description2}</p>
          </div>
        </div>
        <div className="score-item">
          <Award className="icon" />
          <div className="score-item-content">
            <p className="title">{title3}</p>
            <p className="description">{description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBox;
