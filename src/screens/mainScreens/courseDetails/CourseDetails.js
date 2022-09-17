import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./courseDetails.css";

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

//import Images
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";

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

  const [selectedCat,setselectedCat]=useState("intro")
  // skills about to learn from the program
  const skills = [
    "المهارة الأولى",
    "المهارة الثانية",
    "المهارة الثالثة",
    "المهارة الرابعة",
    "المهارة الخامسة",
    "المهارة السادسة",
    "المهارة السابعة",
    "المهارة الثامنة",
    "المهارة التاسعة",
    "المهارة العاشرة",
  ];

  const categories = [{name:"مقدمة عن البرنامة",category:"intro"},{name:"أساسيات الدورة",category:"basics"},"أساسيات الدورة ٢","أساسيات الدورة ٣"];
  // what you gonna learn in this program
  const programLearning = [
    {
      number: 1,
      description: "مثال لأحد أهداف الدورة وسمثال لأحد أهداف الدورة وس",
    },
    {
      number: 2,
      description: "مثال لأحد أهداف الدورة وسمثال لأحد أهداف الدورة وس",
    },
    {
      number: 3,
      description: "مثال لأحد أهداف الدورة وسمثال لأحد أهداف الدورة وس",
    },
    {
      number: 4,
      description: "مثال لأحد أهداف الدورة وسمثال لأحد أهداف الدورة وس",
    },
  ];

  //program content
  const programContent = [
    {
      category:"intro",
      title: "عنوان المقeeeeeeال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics",
      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
    {
      category:"basics2",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics3",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
    {
      category:"intro",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"intro",
      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics",
      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
    {
      category:"basics2",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics3",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
    {
      category:"intro",
      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics",
      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
    {
      category:"basics2",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image2,
    },
    {
      category:"basics3",

      title: "عنوان المقال",
      description:
        "مثال لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق، لأحد أهداف الدورة وسيتم شرحها بشكل مفصل بوقت لاحق",
      image: image1,
    },
  ];

  // top asked questions
  const questions = [
    {
      label: "السؤال الأول",
      question:
        "أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو",
    },
    {
      label: "السؤال الثاني",
      question:
        "أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو",
    },
    {
      label: "السؤال الثالث",
      question:
        "أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدوأساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو أساسيات الدو",
    },
  ];

  return (
    <>
      <Header />
      <ScoreBox
        title1="15+"
        description1="برنامج متاح"
        title2="5+"
        description2="تصينف وفئة"
        title3="500+"
        description3="طالب وطالبة"
      />
      {/* ---------- course details ---------------- */}
      <div className="course-details">
        <div className="p-horizontal">
          <p className="title mb-40">مقدمة عن البرنامج</p>
          <p className="description">
            بربرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد
            الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر يميبر
            نامج الاكاديمي...مج الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج
            الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر
            يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر يميبر نامج
            الاكاديميبرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج
            الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر
            يميبر نامج الاكاديميبرنامج الاكاد الاكاد يميبر يميبر نامج
            الاكاديميبرنامج الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنامج
            الاكاد الاكاد يميبر يميبر نامج الاكاديميبرنا
          </p>
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
            slidesPerView={3.5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
          >
            {programLearning.map(function (item, index) {
              if (index % 2 === 0) {
                return (
                  <SwiperSlide key={index}>
                    <div className="card-about-to-learn">
                      <p className="number">{item.number}</p>
                      <p className="info">{item.description}</p>
                    </div>
                  </SwiperSlide>
                );
              } else {
                return (
                  <SwiperSlide key={index}>
                    <div className="card-about-to-learn active">
                      <p className="number">{item.number}</p>
                      <p className="info">{item.description}</p>
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
                onClick={() => swiperProgContentRef.current.swiper.slidePrev()}
                className="icon"
              />
              <ArrowLeft
                onClick={() => swiperProgContentRef.current.swiper.slideNext()}
                className="icon"
              />
            </div>
          </div>
          <div className="programs-content-category">
            <p className="title">عناوين البرنامة</p>
            <div className="btn-title-category active">
              <span>مقدمة عن البرنامة</span>
            </div>
            <div className="btn-title-category">
              <span>أساسيات الدورة</span>
            </div>
            <div className="btn-title-category">
              <span>أساسيات الدورة ٢</span>
            </div>
            <div className="btn-title-category">
              <span>أساسيات الدورة ٣</span>
            </div>
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
            {programContent.filter((el)=>el.category===selectedCat).map((item, index) => (
              <SwiperSlide key={index}>
                <ProgramContentCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="full text-center mt-40">
            <Link to={"/course-details"} className="enroll-program-btn">
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
  );
}

export default CourseDetails;
