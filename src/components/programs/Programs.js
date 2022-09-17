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
    { name: "برامج ا", category: "program1" },
    { name: "برامج ابرامج ا", category: "program2" },
    { name: "برامج ابرامج ابرامج ا", category: "program3" },
  ];

  // get all programs
  const getPrograms = () => {
    axios
      .get("https://mocki.io/v1/648570eb-74b0-4b5c-a200-2848e9f06a54")
      .then((res) => setPrograms(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div className="programs">
      <div className="programs-category mb-40">
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
