import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/svg/close.svg";

function Notification({ id, title, percentage, progress_time }) {
  // colse or open notification
  const [isNotifOpen, setIsNotifOpen] = useState(true);

  return (
    <>
      {isNotifOpen && (
        <div className="relative w-full h-full pt-[24px] pb-[20px] flex flex-col justify-between bg-[#F5F5F5] p-horizontal">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#E2DEFA]">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full bg-[#5E45FF] rounded-[4px]"
            ></div>
          </div>
          <div className="flex flex-row items-center justify-between mb-[16px]">
            <p className="text-[16px] text-black">
              <span className="text-blue mr-[16px]">{percentage}%</span>
              <span className="font-bold text-blue mr-[4px]">3/25</span>
              <span>Hours Completed</span>
            </p>
            <div
              onClick={() => setIsNotifOpen(false)}
              className="text-[12px] text-blue font-bold cursor-pointer"
            >
              <Close className="w-[15px] h-[15px]" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mediamax-860:text-center mediamax-860:flex-col mediamax-860:gap-[16px]">
            <div>
              <p className="text-[20px] font-bold mediamax-950:text-[18px]">
                Current Course
              </p>
              <p className="text-[20px] mediamax-950:text-[18px] text-blue">
                {title}
              </p>
            </div>
            <Link to={`/academy-lessons/course?course_id=${id}`}>
              <button className="font-[inherit] text-[16px] font-bold whitespace-nowrap py-[14px] px-[24px] mediamax-1279:py-[8px] mediamax-1279:px-[20px] mediamax-950:text-[14px] mediamax-950:py-[8px] mediamax-950:px-[24px] rounded-[4px] text-white bg-blue-gradient outline-none border-none cursor-pointer">
                Continue Course
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
