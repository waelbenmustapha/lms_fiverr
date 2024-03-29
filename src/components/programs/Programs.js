import { useState, useRef, useMemo } from "react";

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

function Programs({ programs }) {
  // Swiper instance
  const swiperGridRef = useRef(null);
  // selected category
  const [selectedCat, setselectedCat] = useState("all");

  // Calculate the options for filtering
  // courses by category
  const category = useMemo(() => {
    const options = new Set();
    programs.forEach((row) => {
      options.add(row["category"]);
    });
    let iterator = [...options.values()];
    let items = [{ name: "جميع البرامج", category: "all" }];
    iterator.forEach((element) => {
      items.push({ name: element, category: element });
    });
    return items;
  }, [programs]);

  return (
    <div className="programs">
      <div className="flex flex-row flex-wrap items-center gap-[36px] mediamax-1079:gap-[20px] p-horizontal mb-[40px]">
        <p className="text-[20px] text-primary-color">تصنيف البرامج</p>
        {category.map((ctg, index) => (
          <div
            key={`category-${index}`}
            onClick={() => setselectedCat(ctg.category)}
            className={
              "flex items-center justify-center font-[inherit] text-[20px] font-bold h-[55px] py-[8px] px-[32px] mediamax-1079:text-[16px] mediamax-1079:h-[40px] mediamax-1079:px-[28px] whitespace-nowrap outline-none cursor-pointer border-[1px] border-primary-color " +
              (ctg.category === selectedCat ? "bg-green" : "bg-white")
            }
          >
            <span>{ctg.name}</span>
          </div>
        ))}
      </div>
      <div className="swiper-navigation-header px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
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
          1024: {
            slidesPerView: 3,
          },
          1360: {
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
