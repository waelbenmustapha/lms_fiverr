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
      <svg
        width="588"
        height="503"
        viewBox="0 0 588 503"
        fill="url(#imgpattern)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M584 499H12V36.7648H373.179L436.126 4H584V499Z"
          stroke="#153C3F"
          stroke-width="8"
        />
        <path
          d="M4 491V44.5H348L405 11H576V491H4Z"
          stroke="#00EC8B"
          stroke-width="8"
        />
        <path d="M12 33L12 500" stroke="#153C3F" stroke-width="8" />
        <defs>
          <pattern id="imgpattern" x="0" y="0" width="1" height="1">
            <image width="588" height="503" xlinkHref="/images/image1.png" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
}

export default Header;
