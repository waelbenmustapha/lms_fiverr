import React from "react";
import { Link } from "react-router-dom";
import "./programContentCard.css";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";

function ProgramContentCard({ id, title, description, image, articleUrl }) {
  return (
    <div className="program-content-card relative max-w-[475px] h-[250px] overflow-hidden">
      <img className="w-full h-full" src={image} alt="course" />
      <div className="image-overlay-bg hidden absolute top-0 left-0 w-full h-full overflow-hidden bg-[rgba(21,60,63,0.8)]">
        <div className="image-overlay-content absolute bottom-0 left-0 w-full h-[75%] p-[20px] bg-green translate-y-[100%] duration-[0.5s] mediamax-1023:p-[18] mediamax-950:p-[14px]">
          <p className="text-[18px] font-bold leading-[1] mediamax-950:text-[16px] mediamax-950:mb-[5px] mb-[16px]">
            {title}
          </p>
          <p className="text-[14px] mediamax-950:text-[12px] mb-[16px]">
            {description}
          </p>
          <Link
            to={"/academy-lessons/course?course_id=" + id}
            className="flex flex-row flex-nowrap items-center justify-center w-fit py-[8px] px-[16px] font-[inherit] text-[10px] font-bold text-primary-color bg-white no-underline cursor-pointer shadow-course-card"
          >
            <Book className="w-[14px] h-[14px] ml-[4px]" />
            <span>مقال</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramContentCard;
