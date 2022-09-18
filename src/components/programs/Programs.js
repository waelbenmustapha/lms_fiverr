import { useState, useEffect, useRef } from "react";
// Import Local Styles
import "./programs.css";
// Import needed library
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Grid, Navigation } from "swiper";
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
  // selected category
  const [selectedCat, setselectedCat] = useState("all");
  //store programs data
  const [programs, setPrograms] = useState([]);

  // category items
  const category = [
    { name: "جميع البرامج", category: "all" },
    { name: "برامج ا", category: "برامج ا" },
    { name: "برامج ابرامج ا", category: "برامج ابرامج ا" },
    { name: "برامج ابرامج ابرامج ا", category: "برامج ابرامج ابرامج ا" },
  ];

  // get all programs
  const getPrograms = () => {
    axios
      .get("https://mocki.io/v1/c772ebe2-ea4a-47dc-906a-f9ef4631c85c")
      .then((res) => setPrograms(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div className="programs">
      <div className="programs-category p-horizontal mb-40">
        <p className="title">تصنيف البرامج</p>
        {category.map((ctg, index) => (
          <div
            key={`category-${index}`}
            onClick={() => setselectedCat(ctg.category)}
            className={
              "btn-category " + (ctg.category === selectedCat && "active")
            }
          >
            <span>{ctg.name}</span>
          </div>
        ))}
      </div>
      <div className="programs-header p-horizontal">
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
          1280: {
            slidesPerView: 3,
          },
          1368: {
            slidesPerView: 4,
          },
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Grid, Navigation]}
      >
        {selectedCat === "all"
          ? programs.map((prog, index) => (
              <SwiperSlide key={`prog-${index}`}>
                <CourseCard program={prog} />
              </SwiperSlide>
            ))
          : programs
              .filter((el) => el.category === selectedCat)
              .map((prog, index) => (
                <SwiperSlide key={`prog-${index}`}>
                  <CourseCard program={prog} />
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}

export default Programs;
