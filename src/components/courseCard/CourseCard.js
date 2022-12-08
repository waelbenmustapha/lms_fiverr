import React, { useState, useEffect } from "react";
import { ReactComponent as Share } from "../../assets/svg/upload.svg";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { Link } from "react-router-dom";

function CourseCard({ program }) {
  const [isCopied, setIsCopied] = useState(false);

  // generate link to copy it to Clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(
      window.location.origin +
        "/academy-lessons/course-details?course_id=" +
        program.id
    );
    setIsCopied(true);
  }

  // convert date to arabic date
  const convertDateToArabic = (input) => {
    var date = new Date(input);
    var dateString = date.toLocaleDateString("ar-EG", {
      // year: "numeric",
      month: "short",
      day: "numeric",
    });
    return dateString;
  };

  // disappear after 2 second
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <div className="flex flex-col relative max-w-[475px] h-[440px] rounded-[4px] overflow-hidden bg-white shadow-card hover:shadow-dark">
      <div className="relative w-full h-[180px]">
        <img className="w-full h-full" src={program.thumbnail} alt="course" />
        <div className="absolute bottom-[10px] left-[16px] flex flex-row flex-wrap">
          {program.start_date && (
            <div className="text-[12px] text-blue bg-[#f5f5f5] rounded-[4px] flex flex-row flex-wrap justify-center items-center py-[8px] px-[16px] mr-[16px] mb-[5px]">
              <Calendar className="w-[15px] h-[15px] mr-[10px] text-blue" />
              <span>
                Starts on{" "}
                <span className=" font-bold">{program.start_date}</span>
              </span>
            </div>
          )}
          {program.duration_by_weeks && (
            <div className="text-[12px] text-blue bg-[#f5f5f5] rounded-[4px] flex flex-row flex-wrap justify-center items-center py-[8px] px-[16px] mr-[16px] mb-[5px]">
              <Clock className="w-[15px] h-[15px] mr-[10px] text-blue" />
              <span>
                Lasts{" "}
                <span className=" font-bold">
                  {program.duration_by_weeks} weeks
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 w-full p-[16px] flex flex-col justify-between">
        <div>
          {program.category && (
            <div className="w-fit text-[10px] text-white bg-blue rounded-[4px] font-bold flex flex-row flex-wrap justify-center items-center py-[8px] px-[16px] mb-[10px]">
              <span>{program.category}</span>
            </div>
          )}
          <p className="text-[22px] font-bold mb-[8px] line-clamp-1">
            {program.title}
          </p>
          <div className="text-[16px] mb-[20px] w-full line-clamp-3 overflow-hidden text-ellipsis">
            {program.description}
          </div>
        </div>
        {program.is_comingsoon === true ? (
          <div className="w-full h-[50px] py-[8px] px-[16px] bg-[#e4e4e4] rounded-[4px] font-[inherit] text-[16px] mediamax-1079:text-[14px] mediamax-1079:h-[40px] mediamax-1079:py-[8px] mediamax-1079:px-[14px] text-center flex items-center justify-center whitespace-nowrap">
            <span>Coming soon...</span>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center w-full gap-[16px]">
            <Link
              to={`/academy-lessons/course-details?course_id=${program.id}`}
              className="flex-[1] h-[50px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
            >
              Join Course
            </Link>
            {!isCopied ? (
              <button
                onClick={() => {
                  copyToClipboard();
                }}
                className="flex-[1] h-[50px] py-[8px] px-[16px] flex flex-row items-center justify-center gap-[8px] font-[inherit] text-[14px] text-blue bg-white font-bold outline-none border-[1px] rounded-[4px] cursor-pointer whitespace-nowrap border-blue"
              >
                <Share />
                <span>Share Course</span>
              </button>
            ) : (
              <button
                disabled
                className="flex-[1] h-[50px] py-[8px] px-[16px] bg-[#f5f5f5] font-[inherit] text-[14px] text-blue font-bold flex flex-row items-center justify-center gap-[8px] outline-none border-[1px] rounded-[4px] cursor-pointer whitespace-nowrap border-blue"
              >
                <span>Copied !!</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
