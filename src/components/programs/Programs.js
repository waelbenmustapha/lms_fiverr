import { useRef } from "react";
// Import Local Styles
import "./programs.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// Import Components
import CourseCard from "../courseCard/CourseCard";

// Import SVG
import { ReactComponent as ArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";

SwiperCore.use([Navigation]);

function Programs() {
  // Swiper instance
  const swiperGridRef = useRef(null);

  const programs = [
    {
      title: "",
      description:
        "دوربرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميدوربرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميدوربرنامج الاكاد الاكاد يميبر.",
    },
  ];

  return (
    <div className="programs">
      <div className="programs-category">
        <p className="title">تصنيف البرامج</p>
        <div className="btn-category active">
          <span>جميع البرامج</span>
        </div>
        <div className="btn-category">
          <span>برامج ا</span>
        </div>
        <div className="btn-category">
          <span>برامج ابرامج ا</span>
        </div>
        <div className="btn-category">
          <span>برامج ابرامج ابرامج ا</span>
        </div>
      </div>
      <div className="programs-header">
        <p className="title">جميع البرامج</p>
        <div className="swipe-btns">
          <ArrowRight
            onClick={() => swiperGridRef.current.swiper.slidePrev()}
            className="icon"
          />
          <ArrowLeft
            onClick={() => swiperGridRef.current.swiper.slideNext()}
            className="icon"
          />
        </div>
      </div>
      <Swiper
        ref={swiperGridRef}
        dir="rtl"
        spaceBetween={40}
        slidesPerView={2.5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="mb-40">
            <CourseCard />
          </div>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-40">
            <CourseCard />
          </div>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-40">
            <CourseCard />
          </div>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-40">
            <CourseCard />
          </div>
          <CourseCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Programs;
