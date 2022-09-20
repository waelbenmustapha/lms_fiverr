import { useState, useEffect, useRef } from "react";
// Import needed library
import axios from "axios";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// Import SVG
import { ReactComponent as ArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";

// import components
import CallUsBox from "../../components/callUsBox/CallUsBox";
import Header from "../../components/header/Header";
import ScoreBox from "../../components/scoreBox/ScoreBox";
import Collapsible from "../../components/Collapsible/Collapsible";
import ProgramContentCard from "../../components/programContentCard/ProgramContentCard";

SwiperCore.use([Navigation]);

function CourseDetails() {
  // Swiper instance
  const swiperLearningRef = useRef(null);
  const swiperProgContentRef = useRef(null);

  // default selected category
  const [selectedTitle, setselectedTitle] = useState("مقدمة عن البرنامة");

  //store Course data
  const [data, setData] = useState({});
  const [programTitles, setProgramTitles] = useState([]);
  const [programContent, setProgramContent] = useState([]);
  const [learningProcess, setLearningProcess] = useState([]);
  const [skills, setSkills] = useState([]);

  //store Top asked questions data
  const [questions, setQuestions] = useState([]);

  // get all Course Data
  const getData = () => {
    axios
      .get("https://mocki.io/v1/770e18db-6039-4c9f-99b3-85ba02825045")
      .then((res) => {
        setData(res.data);
        setProgramTitles(res.data.program_titles);
        setProgramContent(res.data.program_content);
        setLearningProcess(res.data.learning_process);
        setSkills(res.data.skills_gained);
      });
  };

  // get all programs
  const getQuestions = () => {
    axios
      .get("https://mocki.io/v1/a0fe7b6f-176f-46e8-b3d4-9be5466569a9")
      .then((res) => setQuestions(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getData();
    getQuestions();
  }, []);

  return (
    data && (
      <>
        <Header
          course_id={data.id}
          title={data.title}
          description={data.description}
          image={data.program_image}
          start_date={data.start_date}
          duration={data.duration}
          learning_average={data.learning_average}
        />
        <ScoreBox
          title1={`${data.time_recorded}+`}
          description1="ساعة مسجلة"
          title2={`${data.related_article}+`}
          description2="مقال ذات صلة"
          title3={data.program_completion}
          description3="إتمام البرنامج"
        />

        {/* ---------- course details ---------------- */}
        <div className="py-[100px] bg-bg-1 bg-no-repeat mediamax-1023:py-[50px] mediamax-950:py-[40px]">
          <div className="p-horizontal">
            <p className="font-[inherit] text-[32px] font-bold mb-[30px] mediamax-1023:text-[28px] mediamax-1023:mb-[20px] mediamax-950:text-[24px] ">
              مقدمة عن البرنامج
            </p>
            <p className="font-[inherit] text-[20px] mb-[100px] mediamax-1023:text-[20px] mediamax-1023:mb-[60px] mediamax-950:text-[18px] mediamax-950:mb-[60px]">
              {data.introduction}
            </p>
          </div>
          {/* ------- what you gonna learn in this programs ------- */}
          <div className="mb-[60px]">
            <div className="swiper-navigation-header p-horizontal">
              <p className="title">ماذا ستتعلم في هذا البرنامج:</p>
              <div className="swipe-btns">
                <ArrowRight
                  onClick={() => swiperLearningRef.current.swiper.slidePrev()}
                  className="icon"
                />
                <ArrowLeft
                  onClick={() => swiperLearningRef.current.swiper.slideNext()}
                  className="icon"
                />
              </div>
            </div>
            <Swiper
              ref={swiperLearningRef}
              dir="rtl"
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                780: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3.3,
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
              {learningProcess.map(function (text, index) {
                if (index % 2 === 0) {
                  return (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-start justify-center p-[32px] mediamax-1023:p-[30px] mediamax-1023:max-w-[380px] mediamax-1023:h-[300px] mediamax-950:p-[28px] mediamax-950:max-w-[350px] mediamax-950:h-[280px] text-primary-color bg-[#fafafa] max-w-[412px] h-[338px]">
                        <p className="text-[80px] font-bold mediamax-1023:text-[60px] mediamax-950:text-[40px]">
                          {index + 1}
                        </p>
                        <p className="text-[24px] font-bold mediamax-1023:text-[20px] mediamax-950:text-[18px]">
                          {text}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-start justify-center p-[32px] mediamax-1023:p-[30px] mediamax-1023:max-w-[380px] mediamax-1023:h-[300px] mediamax-950:p-[28px] mediamax-950:max-w-[350px] mediamax-950:h-[280px] text-primary-color max-w-[412px] h-[338px] ml-[8px] bg-green shadow-[-8px_8px_0px_#153c3f]">
                        <p className="text-[80px] font-bold mediamax-1023:text-[60px] mediamax-950:text-[40px]">
                          {index + 1}
                        </p>
                        <p className="text-[24px] font-bold mediamax-1023:text-[20px] mediamax-950:text-[18px]">
                          {text}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
          {/* --------------- Skills gained from this program ------------------ */}
          <div className="w-full py-[100px] bg-[rgba(20,58,61,5%)] mediamax-1023:py-[70px] mediamax-950:py-[50px] p-horizontal">
            <p className="text-[32px] mediamax-1079:text-[24px] mb-[40px]">
              المهارات المكتسبة من برنامج الابتكار المفتوح:
            </p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-[16px]">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center py-[14px] px-[36px] w-fit text-primary-color border-[2px] border-primary-color"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* --------------- program content -------------------- */}
          <div className="relative py-[100px] mediamax-1023:py-[70px] mediamax-950:py-[50px]">
            <div className="swiper-navigation-header p-horizontal">
              <p className="title">محتوى البرنامج</p>
              <div className="swipe-btns">
                <ArrowRight
                  onClick={() =>
                    swiperProgContentRef.current.swiper.slidePrev()
                  }
                  className="icon"
                />
                <ArrowLeft
                  onClick={() =>
                    swiperProgContentRef.current.swiper.slideNext()
                  }
                  className="icon"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-[36px] py-0 px-[64px] mt-[48px] mediamax-950:flex mediamax-950:flex-wrap mediamax-950:items-center mediamax-950:gap-[20px] mediamax-950:py-0 mediamax-950:px-[64px] mediamax-950:mt-[15px]">
              <p className="text-[20px] text-primary-color">عناوين البرنامة</p>
              {programTitles.map((el, index) => (
                <div
                  key={`ctg-${index}`}
                  onClick={() => setselectedTitle(el.label)}
                  className={
                    "flex items-center justify-center font-[inherit] text-[20px] font-bold h-[55px] py-[14px] px-[32px] mediamax-1023:text-[18px] mediamax-1023:h-[45px] mediamax-1023:py-[12px] mediamax-1023:px-[28px] mediamax-950:text-[16px] mediamax-950:h-[40px] mediamax-950:py-[12px] mediamax-950:px-[28px] outline-none whitespace-nowrap cursor-pointer " +
                    (el.label === selectedTitle
                      ? "bg-green shadow-strong-shadow"
                      : "bg-[#f5f5f5]")
                  }
                >
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <Swiper
              ref={swiperProgContentRef}
              dir="rtl"
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                850: {
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
              {programContent
                .filter((el) => el.label === selectedTitle)
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProgramContentCard
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full text-center mt-[40px]">
              <Link
                to={"/academy-lessons/course-details"}
                className="h-[60px] mediamax-1079:h-[50px] py-[16px] mediamax-1079:py-[14px] px-[60px] mediamax-1079:[50px] font-[inherit] text-[20px] mediamax-1079:text-[18px] font-bold whitespace-nowrap text-center no-underline outline-none text-primary-color bg-green cursor-pointer"
              >
                انضم للدورة التدريبية
              </Link>
            </div>
          </div>
          {/* ------- devider ------ */}
          <div className="w-full p-horizontal">
            <div className="w-full h-[1px] bg-[rgba(21,60,63,0.1)]"></div>
          </div>
          {/* --------------- top asked questions ------------- */}
          <div className="py-[100px] mediamax-1023:py-[70px] mediamax-950:py-[50px] p-horizontal">
            <p className="text-[32px] mediamax-1079:text-[24px] mb-[40px]">
              الأسئلة الشائعة
            </p>
            <div>
              {questions.map((item, index) => (
                <div key={index} className="mb-[16px]">
                  <Collapsible label={item.label}>
                    <p>{item.question}</p>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
          {/* ------- devider ------ */}
          <div className="w-full p-horizontal">
            <div className="w-full h-[1px] bg-[rgba(21,60,63,0.1)]"></div>
          </div>
        </div>
        <CallUsBox
          title="باقي ما جاوبناك؟"
          description="تواصل معنا لمساعدتك على آلية التسجيل وتوفيرك بمعلومات إضافية"
        />
      </>
    )
  );
}

export default CourseDetails;
