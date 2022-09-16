import { useState } from "react";
import "./notification.css";

function Notification() {
  // colse or open notification
  const [isNotifOpen, setIsNotifOpen] = useState(true);

  return (
    <>
      {isNotifOpen && (
        <div className="custom-shadow-box">
          <div className="notification">
            <div className="notif-header">
              <p className="title">برامجك الحالية:</p>
              <div onClick={() => setIsNotifOpen(false)} className="close-btn">
                <div className="minus"></div>
                <span>إخفاء</span>
              </div>
            </div>
            <div className="notif-content">
              <p className="description">
                يبر نامج الاك اديميب رنامج ايبر نامجلا
              </p>
              <div className="lesson-track">
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="25"></circle>
                    <circle
                      cx="28"
                      cy="28"
                      r="25"
                      style={{ "--percent": 15 }}
                    ></circle>
                  </svg>
                  <div className="number">
                    <h3>
                      15<span>%</span>
                    </h3>
                  </div>
                </div>
                <p>أتممت ٣ ساعات من أصل ٢٥ ساعة</p>
              </div>
              <button>متابعة البرنامج</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
