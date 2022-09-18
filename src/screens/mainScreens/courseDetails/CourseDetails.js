import { useState, useEffect, useRef } from "react";
import "./courseDetails.css";
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
import { ReactComponent as ArrowLeft } from "../../../assets/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/svg/arrowRight.svg";

// import components
import CallUsBox from "../../../components/callUsBox/CallUsBox";
import Header from "../../../components/header/Header";
import ScoreBox from "../../../components/scoreBox/ScoreBox";
import Collapsible from "../../../components/Collapsible/Collapsible";
import ProgramContentCard from "../../../components/programContentCard/ProgramContentCard";

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
        <div className="course-details">
          <div className="p-horizontal">
            <p className="title ">مقدمة عن البرنامج</p>
            <p className="description">{data.introduction}</p>
          </div>
          {/* ------- what you gonna learn in this programs ------- */}
          <div className="program-learning">
            <div className="swiper-navigation-header">
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
                1300:{
                  slidesPerView: 4,
                }
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
                      <div className="card-about-to-learn">
                        <p className="number">{index + 1}</p>
                        <p className="info">{text}</p>
                      </div>
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide key={index}>
                      <div className="card-about-to-learn active">
                        <p className="number">{index + 1}</p>
                        <p className="info">{text}</p>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
          {/* --------------- Skills gained from this program ------------------ */}
          <div className="program-skills p-horizontal">
            <p className="title mb-40">
              المهارات المكتسبة من برنامج الابتكار المفتوح:
            </p>
            <div className="skills">
              {skills.map((item, index) => (
                <div key={index} className="skills-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* --------------- program content -------------------- */}
          <div className="program-content">
            <div className="swiper-navigation-header">
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
            <div className="programs-content-category">
              <p className="title">عناوين البرنامة</p>
              {programTitles.map((el, index) => (
                <div
                  key={`ctg-${index}`}
                  onClick={() => setselectedTitle(el.label)}
                  className={
                    "btn-title-category " +
                    (el.label === selectedTitle && "active")
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
              slidesPerView={2.5}
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
            <div className="full text-center mt-40">
              <Link
                to={"/academy-lessons/course-details"}
                className="enroll-program-btn"
              >
                انضم للدورة التدريبية
              </Link>
            </div>
          </div>
          {/* ------- devider ------ */}
          <div className="full p-horizontal">
            <div className="devider"></div>
          </div>
          {/* --------------- top asked questions ------------- */}
          <div className="top-asked-questions p-horizontal">
            <p className="title mb-40">الأسئلة الشائعة</p>
            <div>
              {questions.map((item, index) => (
                <div key={index} className="mb-16">
                  <Collapsible label={item.label}>
                    <p>{item.question}</p>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
          {/* ------- devider ------ */}
          <div className="full p-horizontal">
            <div className="devider"></div>
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
