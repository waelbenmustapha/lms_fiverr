import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Check } from "../../assets/svg/check-circle-greeno-utline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
// import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";

function Header({
  id,
  title,
  description,
  image,
  start_date,
  duration,
  learning_average,
}) {
  const [joined, setJoined] = useState(false);
  return (
    <div className="header px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
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
        <div>
          <div
            onClick={() => setJoined(!joined)}
            className={
              "text-[20px] font-[bold] text-center flex items-center justify-center w-full h-[55px] py-2 px-4   outline-none border-none cursor-pointer " +
              (joined
                ? "bg-[#153C3F] text-[#00ec8b] "
                : "bg-[#00ec8b] text-primary-color ")
            }
          >
            {joined ? (
              <div className="flex flex-row gap-[10px] items-center">
                <Check />
                <p>تم انضمامك للبرنامج بنجاح!</p>
              </div>
            ) : (
              "انضم للبرنامج التدريبي"
            )}
          </div>
          {joined && (
            <div
              className="w-full h-[50px] bg-white flex items-center text-[16px] px-[16px]"
             
            >
              <span> يمكنك الآن عرض البرنامج والبدء فيه..</span>
              <Link  to={`/academy-lessons/course?course_id=${id}`} className="font-[bold]  cursor-pointer text-[#00EC8B]"> ابدأ البرنامج</Link>
            </div>
          )}
        </div>
      </div>
      <div className="header-image">
        <svg
          className="svg-image"
          viewBox="0 0 588 503"
          fill="url(#imgpattern)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M584 499H12V36.7648H373.179L436.126 4H584V499Z"
            stroke="#153C3F"
            strokeWidth="8"
          />
          <path
            d="M4 491V44.5H348L405 11H576V491H4Z"
            stroke="#00EC8B"
            strokeWidth="8"
          />
          <path d="M12 33L12 500" stroke="#153C3F" strokeWidth="8" />
          <defs>
            <pattern id="imgpattern" x="0" y="0" width="1" height="1">
              <image width="588" height="503" xlinkHref={image} />
            </pattern>
          </defs>
        </svg>
        {/* <div className="play-btn">
          <PlayButton
            style={{ color: "white", height: "56px", width: "56px" }}
            stroke="white"
          />
          <p style={{ fontSize: "24px", fontFamily: "bold", color: "white" }}>
            شغل الفيديو
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
