import React from "react";
import "./header.css";
import image1 from "../../assets/images/image1.png";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { ReactComponent as Mask } from "../../assets/svg/video-mask.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <p className="title">
            برنامج الاكاد الاكاد يميبر يميبر نامج الاكاديمي
          </p>
          <p className="description">
            بربرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد
            الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر يميبر
            نامج الاكاديمي... برنامج الاكاد الاكاد يميبر يميبر نامج
            الاكاديميبرنامج الاكاد ...
          </p>
          <div className="description-track">
            <Calendar className="icon" />
            <p>
              يبدأ البرنامج في تاريخ{" "}
              <span style={{ fontWeight: "bold" }}>٢٠ أكتوبر</span>
            </p>
          </div>
          <div className="description-track">
            <Clock className="icon" />
            <p>
              مدة البرنامج <span style={{ fontWeight: "bold" }}>٣ أسابيع</span>،
              بمعدل <span style={{ fontWeight: "bold" }}>٣ ساعات أسبوعيًا</span>
            </p>
          </div>
        </div>
        <button>انضم للبرنامج التدريبي</button>
      </div>
      <div className="header-image">
        <div className="clip-mask-image">
          <img src={image1} alt="course" />
        </div>
        <Mask className="mask" />
      </div>
    </div>
  );
}

export default Header;
