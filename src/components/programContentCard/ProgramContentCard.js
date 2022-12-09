import React from "react";
import { Link } from "react-router-dom";
import "./programContentCard.css";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";

function ProgramContentCard({ id, title, description, image, articleUrl }) {
  return (
    <div className="program-content-card relative max-w-[475px] h-[250px] overflow-hidden">
      <img className="w-full h-full" src={image} alt="course" />
      <div className="image-overlay-bg hidden absolute top-0 left-0 w-full h-full overflow-hidden bg-[rgba(21,60,63,0.8)]">
        <div className="image-overlay-content absolute bottom-0 left-0 w-full h-[70%] p-[24px] bg-blue-gradient translate-y-[100%] duration-[0.5s] mediamax-1023:p-[20]">
          <div className="flex flex-row justify-between items-center mb-[16px]">
            <p className="text-[24px] text-white font-bold leading-[1] mediamax-950:text-[20px]">
              {title}
            </p>
            <Link
              to={"/academy-lessons/course?course_id=" + id}
              className="flex flex-row flex-nowrap items-center justify-center w-fit py-[4px] px-[8px] rounded-[4px] font-[inherit] text-[14px] font-bold text-blue bg-yellow no-underline cursor-pointer"
            >
              <Book className="w-[14px] h-[14px] mr-[4px]" />
              <span>Article</span>
            </Link>
          </div>
          <p className="text-[14px] text-white mediamax-950:text-[12px] line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramContentCard;
