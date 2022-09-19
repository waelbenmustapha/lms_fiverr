import { useState, useEffect } from "react";
import "./notification.css";
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
        <div className="custom-shadow-box">
          <div className="notification px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
            <div className="notif-header">
              <p className="title">برامجك الحالية:</p>
              <div onClick={() => setIsNotifOpen(false)} className="close-btn">
                <div className="minus"></div>
                <span>إخفاء</span>
              </div>
            </div>
            <div className="notif-content">
              <p className="description">{data.current_course_name}</p>
              <div className="lesson-track">
                <div className="percent">
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
                <p>{data.current_course_progress_time}</p>
              </div>
              <Link
                to={`/academy-lessons/course?course_id=${data.current_course_id}`}
              >
                <button>متابعة البرنامج</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
