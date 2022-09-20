import { useState, useEffect } from "react";
// Import needed library
import axios from "axios";
import { Link } from "react-router-dom";

function Notification() {
  // colse or open notification
  const [isNotifOpen, setIsNotifOpen] = useState(true);

  //store Course Progress data
  const [data, setData] = useState({});

  // get current course progress
  const getCourseProgress = () => {
    axios
      .get("https://mocki.io/v1/34bcf0c9-60a7-4ae4-a135-a1514fe39817")
      .then((res) => setData(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getCourseProgress();
  }, []);

  return (
    <>
      {isNotifOpen && (
        <div className="w-full bg-primary-color">
          <div className="w-full h-full py-[24px] flex flex-col justify-between bg-white translate-x-[6px] translate-y-[-6px] p-horizontal">
            <div className="flex flex-row items-center justify-between mediamax-860:mb-[20px]">
              <p className="text-[24px] mediamax-950:text-[20px] font-bold text-green">
                برامجك الحالية:
              </p>
              <div
                onClick={() => setIsNotifOpen(false)}
                className="flex flex-row items-center justify-center text-[12px] font-bold cursor-pointer"
              >
                <div className="w-[8px] h-[2px] ml-[10px] bg-primary-color"></div>
                <span>إخفاء</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mediamax-860:text-center mediamax-860:flex-col mediamax-860:gap-[16px]">
              <p className="text-[24px] mediamax-950:text-[20px] text-primary-color">
                {data.current_course_name}
              </p>
              <div className="lesson-track">
                <div className="percent mediamax-950:ml-0">
                  <svg>
                    <circle cx="28" cy="28" r="25"></circle>
                    <circle
                      cx="28"
                      cy="28"
                      r="25"
                      style={{
                        "--percent": data.current_course_progress_percent,
                      }}
                    ></circle>
                  </svg>
                  <div className="number">
                    <h3>
                      {data.current_course_progress_percent}
                      <span>%</span>
                    </h3>
                  </div>
                </div>
                <p className="text-[16px] mediamax-950:text-[14px]">
                  {data.current_course_progress_time}
                </p>
              </div>
              <Link
                to={`/academy-lessons/course?course_id=${data.current_course_id}`}
              >
                <button className="font-[inherit] text-[16px] font-bold whitespace-nowrap h-[55px] py-[14px] px-[50px] mediamax-1279:py-[8px] mediamax-1279:px-[20px] mediamax-950:text-[14px] mediamax-950:h-[40px] mediamax-950:py-[8px] mediamax-950:px-[24px] text-primary-color bg-green outline-none border-none cursor-pointer">
                  متابعة البرنامج
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
