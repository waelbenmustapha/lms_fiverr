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

  // function for day nth suffix
  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // convert date to arabic date
  const convertDate = (input) => {
    const fortnightAway = new Date(input);
    const date = fortnightAway.getDate();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][fortnightAway.getMonth()];
    return `${month} ${date}${nth(date)}`;
  };

  // disappear after 2 second
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <div className="course-card group text-black hover:text-white flex flex-col relative max-w-[475px] h-[440px] rounded-[4px] overflow-hidden bg-white shadow-card hover:shadow-dark">
      <div className="relative w-full h-[180px]">
        <img className="w-full h-full" src={program.thumbnail} alt="course" />
        <div className="absolute bottom-[10px] left-[16px] flex flex-row flex-wrap">
          {program.start_date && (
            <div className="text-[12px] text-blue bg-[#f5f5f5] rounded-[4px] flex flex-row flex-wrap justify-center items-center py-[8px] px-[16px] mr-[16px] mb-[5px]">
              <Calendar className="w-[15px] h-[15px] mr-[10px] text-blue" />
              <span>
                Starts on{" "}
                <span className=" font-bold">
                  {convertDate(program.start_date)}
                </span>
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
            <div className="course-card-category w-fit text-[10px] text-white group-hover:text-blue bg-blue group-hover:bg-yellow rounded-[4px] font-bold flex flex-row flex-wrap justify-center items-center py-[8px] px-[16px] mb-[10px]">
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
          <div className="w-full h-[50px] py-[8px] px-[16px] text-blue bg-[#e4e4e4] rounded-[4px] font-[inherit] text-[16px] mediamax-1079:text-[14px] mediamax-1079:h-[40px] mediamax-1079:py-[8px] mediamax-1079:px-[14px] text-center flex items-center justify-center whitespace-nowrap">
            <span>Coming soon...</span>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center w-full gap-[16px]">
            <Link
              to={`/academy-lessons/course-details?course_id=${program.id}`}
              className="flex-[1] h-[50px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-transparent outline-none bg-blue group-hover:bg-white text-white group-hover:text-blue"
            >
              Join Course
            </Link>
            {!isCopied ? (
              <button
                onClick={() => {
                  copyToClipboard();
                }}
                className="group-hover:text-white text-blue flex-[1] h-[50px] py-[8px] px-[16px] flex flex-row items-center justify-center gap-[8px] font-[inherit] text-[14px]  font-bold outline-none border-[1px] rounded-[4px] cursor-pointer whitespace-nowrap border-blue group-hover:border-white"
              >
                <Share />
                <span>Share Course</span>
              </button>
            ) : (
              <button
                disabled
                className="text-blue flex-[1] h-[50px] py-[8px] px-[16px] bg-[#f5f5f5] font-[inherit] text-[14px] font-bold flex flex-row items-center justify-center gap-[8px] outline-none border-[1px] rounded-[4px] cursor-pointer whitespace-nowrap border-blue"
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
