import React, { useState, useEffect } from "react";
import { ReactComponent as Share } from "../../assets/svg/share.svg";
import { ReactComponent as Calendar } from "../../assets/svg/calendar.svg";
import { ReactComponent as Clock } from "../../assets/svg/clockFill.svg";
import { Link } from "react-router-dom";

function CourseCard({ program }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(
      window.location.origin +
        "/academy-lessons/course-details?course_id=" +
        program.id
    );
    setIsCopied(true);
  }

  // disappear after 2 second
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <div className="relative max-w-[475px] h-[410px] border-[1px] border-primary-color bg-white hover:transition-transform hover:duration-[0.25s] hover:translate-y-[-8px] hover:shadow-dark">
      <div className="relative w-full h-[220px]">
        <img className="w-full h-full" src={program.thumbnail} alt="course" />
        <div className="absolute bottom-[10px] right-[16px] flex flex-row flex-wrap">
          {program.category && (
            <div className="text-[10px] font-bold flex flex-row flex-wrap justify-center items-center py-[5px] px-[16px] ml-[5px] mb-[5px] bg-[#f5f5f5] border-[1px] border-[#153c3f]">
              <span>{program.category}</span>
            </div>
          )}
          {program.duration_by_weeks && (
            <div className="text-[10px] font-bold flex flex-row flex-wrap justify-center items-center py-[5px] px-[16px] ml-[5px] mb-[5px] bg-[#f5f5f5] border-[1px] border-[#153c3f]">
              <Clock className="w-[10px] h-[10px] ml-[5px]" />
              <span>
                {program.duration_by_weeks &&
                  program.duration_by_weeks.toLocaleString("ar-EG")}{" "}
                أسابيع
              </span>
            </div>
          )}
          {program.start_date && (
            <div className="text-[10px] font-bold flex flex-row flex-wrap justify-center items-center py-[5px] px-[16px] ml-[5px] mb-[5px] bg-[#f5f5f5] border-[1px] border-[#153c3f]">
              <Calendar className="w-[10px] h-[10px] ml-[5px]" />
              <span>تبدأ في {program.start_date}</span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-[16px]">
        <p className="text-[22px] font-bold mb-[8px]">{program.title}</p>
        <div className="text-[16px] mb-[20px] w-full h-[50px] overflow-hidden text-ellipsis">
          {program.description}
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-[16px]">
          <Link
            to={`/academy-lessons/course-details?course_id=${program.id}`}
            className="flex-[2] h-[40px] py-[8px] px-[16px] font-[inherit] text-[16px] mediamax-1079:text-[14px] mediamax-1079:h-[40px] mediamax-1079:py-[8px] mediamax-1079:px-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] border-primary-color outline-none bg-primary-color text-white"
          >
            إنضم للبرنامج
          </Link>
          {!isCopied ? (
            <button
              onClick={() => {
                copyToClipboard();
              }}
              className="flex-[1] h-[40px] py-[8px] px-[16px] flex flex-row items-center justify-center gap-[8px] font-[inherit] text-[16px] text-primary-color bg-white font-bold outline-none border-[1px] cursor-pointer whitespace-nowrap border-primary-color mediamax-1079:text-[14px] mediamax-1079:px-[14px]"
            >
              <Share />
              <span>شارك الدورة</span>
            </button>
          ) : (
            <button
              disabled
              className="flex-[1] h-[40px] py-[8px] px-[16px] bg-[#f5f5f5] font-[inherit] text-[16px] text-primary-color font-bold flex flex-row items-center justify-center gap-[8px] outline-none border-[1px] cursor-pointer whitespace-nowrap border-primary-color mediamax-1079:text-[14px] mediamax-1079:px-[14px]"
            >
              <span>تم النسخ!!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
