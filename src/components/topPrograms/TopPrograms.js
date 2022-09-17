import { useState, useEffect, useRef } from "react";
// Import Local Styles
import "./topPrograms.css";
// Import needed library
import axios from "axios";

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

function TopPrograms() {
  // Swiper instance
  const swiperRef = useRef(null);

  //store Top Programs data
  const [topPrograms, setTopPrograms] = useState([]);

  // get all programs
  const getTopPrograms = () => {
    axios
      .get("https://mocki.io/v1/c772ebe2-ea4a-47dc-906a-f9ef4631c85c")
      .then((res) => setTopPrograms(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getTopPrograms();
  }, []);

  return (
    <div className="top-programs">
      <div className="swiper-navigation-header">
        <p className="title">البرامج الأكثر شيوعًا</p>
        <div className="swipe-btns">
          <ArrowRight
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="icon"
          />
          <ArrowLeft
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="icon"
          />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        dir="rtl"
        spaceBetween={40}
        slidesPerView={2.5}
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
      <div className="see-more">
        <button className="see-more-btn">اكتشف جميع البرامج</button>
      </div>
    </div>
  );
}

export default TopPrograms;
