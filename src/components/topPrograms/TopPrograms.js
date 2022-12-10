import { useRef } from "react";

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
import { ReactComponent as ArrowLeft } from "../../assets/svg/double-arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/double-arrow-right.svg";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation]);

function TopPrograms({ topPrograms }) {
  // Swiper instance
  const swiperRef = useRef(null);

  return (
    <div className="mb-[40px]">
      <div className="swiper-navigation-header p-horizontal">
        <p className="title">Popular Courses</p>
        <div className="swipe-btns">
          <ArrowLeft
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="icon text-blue"
          />
          <ArrowRight
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="icon text-blue"
          />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.75,
          },
          900: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1360: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {topPrograms.map((prog, index) => (
          <SwiperSlide key={`prog-${index}`}>
            <CourseCard program={prog} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row items-center justify-start w-full py-[10px] p-horizontal">
        <Link to={"/academy-lessons/all-courses"}>
          <button className="font-[inherit] text-[16px] mediamax-767:text-[14px] font-bold text-white bg-blue-gradient rounded-[4px] whitespace-nowrap py-[14px] px-[32px] mediamax-1079:py-[12px] mediamax-767:py-[8px]  mediamax-1079:px-[28px] mediamax-767:px-[20px] outline-none border-none cursor-pointer">
            Discover All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TopPrograms;
