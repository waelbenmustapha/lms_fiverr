import { useState, useEffect, useRef, useMemo } from "react";
// Import needed library
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// Import SVG
import { ReactComponent as ArrowLeft } from "../../assets/svg/double-arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/double-arrow-right.svg";
import { ReactComponent as GroupArrow } from "../../assets/svg/group-arrow1.svg";
import { ReactComponent as GroupFlesh } from "../../assets/svg/group-flesh.svg";

// import components
import CallUsBox from "../../components/callUsBox/CallUsBox";
import Header from "../../components/header/Header";
import ScoreBox from "../../components/scoreBox/ScoreBox";
import Collapsible from "../../components/Collapsible/Collapsible";
import ProgramContentCard from "../../components/programContentCard/ProgramContentCard";
import { EnrollToCourse } from "../../utils/apis/course/CoursePage";
import { RotatingLines } from "react-loader-spinner";
import { useAuth } from "../../contexts/AuthContext";

import Loader from "../../components/Loader";
import useAxiosToken from "../../utils/apis/AxiosWithToken";

SwiperCore.use([Navigation]);

function CourseDetails() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // add this course_id to url to fetch course by id
  const course_id = searchParams.get("course_id");

  // Swiper instance
  const swiperLearningRef = useRef(null);
  const swiperProgContentRef = useRef(null);
  const axiosToken = useAxiosToken();
  const [loading, setLoading] = useState(true);
  //store Course details data
  const [data, setData] = useState({});
  const [objectives, setObjectives] = useState([]);
  const [skills, setSkills] = useState([]);
  const [courseContent, setCourseContent] = useState([]);
  const [filtredLessons, setFiltredLessons] = useState([]);
  const [questions, setQuestions] = useState([]);

  // default selected category
  const [selectedTitle, setselectedTitle] = useState("");
  // course content titles
  const [chaptersTitles, setChaptersTitles] = useState([]);

  // status of user is erolled or not
  const [joined, setJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // filter courses by chapter
  useEffect(() => {
    const filterByChapter = () => {
      const chapter = courseContent.find((chp) => chp.title === selectedTitle);
      if (chapter != null) {
        setFiltredLessons(chapter.lessons);
      }
    };
    filterByChapter();
  }, [selectedTitle]);

  // handle user enroll to course
  const enrollToCourse = () => {
    console.log(auth);
    if (auth.user) {
      EnrollToCourse({
        course_id: course_id,
        is_enrolled: true,
        name: "test", // this is just to make fake api work remove it in later part
        job: "test", // this is just to make fake api work remove it in later part
      })
        .then((res) => {
          console.log(res);
          // display loader
          setIsSubmitting(true);
          // delay 1 second
          setTimeout(() => {
            setIsSubmitting(false);
            setJoined(true);
          }, 1000);
        })
        .catch((error) => console.log(error));
    } else {
      window.location.replace("https://google.com");
    }
  };

  // Calculate the options for filtering
  // course content by chapter title
  useMemo(() => {
    const options = new Set();
    courseContent.forEach((row) => {
      options.add(row["title"]);
    });
    let iterator = [...options.values()];
    let items = [];
    iterator.forEach((element) => {
      items.push({ name: element, label: element });
    });
    if (items.length > 0) setselectedTitle(items[0].name);
    setChaptersTitles(items);
    return items;
  }, [courseContent]);

  // convert date to arabic date
  const convertDateToArabic = (input) => {
    var date = new Date(input);
    var dateString = date.toLocaleDateString("ar-EG", {
      // year: "numeric",
      month: "short",
      day: "numeric",
    });
    return dateString;
  };

  // convert Number to Arabic Number
  const convertNumberToArabic = (input) => {
    return input.toLocaleString("ar-EG");
  };

  // get all Course Data
  const getData = () => {
    console.log(
      "https://mocki.io/v1/da76c052-2598-4557-a565-1d998eb999aa" +
        `/${course_id}`
    );
    axiosToken
      .get(
        "https://mocki.io/v1/da76c052-2598-4557-a565-1d998eb999aa" /*+ `/${course_id}`*/
      )
      .then((res) => {
        setData(res.data);
        convertDateToArabic(res.data.start_date);
        setObjectives(res.data.objective_desc);
        setSkills(res.data.skills_desc);
        setCourseContent(res.data.chapters);
        setQuestions(res.data.faq_desc);
        setJoined(res.data.is_enrolled);
        setLoading(false);
      });
  };

  // run api to load the data
  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  return (
    data && (
      <>
        <Header
          course_id={data.id}
          title={data.title}
          description={data.description}
          image={data.thumbnail}
          video={data.preview_video}
          start_date={data.start_date}
          duration={data.duration_by_weeks + " weeks"}
          learning_average={data.duration_by_hours_per_week + " hours"}
          is_enrolled={data.is_enrolled}
          is_course_details={true}
        />
        <ScoreBox
          title1={`${data.statistics_one}+`}
          description1="Students"
          title2={`${data.statistics_two}+`}
          description2="Available Courses"
          title3={data.statistics_three}
          description3="Categories"
        />

        {/* ---------- course details ---------------- */}
        <div className="p-horizontal">
          <p className="text-[36px] mediamax-1023:text-[28px] font-bold mediamax-1079:text-[28px] mb-[20px] ">
            {data.about_title}
          </p>
          <p className="font-[inherit] text-[20px] mb-[100px] mediamax-1023:text-[20px] mediamax-1023:mb-[60px] mediamax-950:text-[18px] mediamax-950:mb-[60px]">
            {data.about_desc}
          </p>
        </div>
        <div className="bg-bg-1 bg-right-bottom bg-no-repeat">
          {/* ------- course objectives ------- */}
          <div className="mb-[60px]">
            <div className="swiper-navigation-header p-horizontal">
              <p className="title">{data.objectives}:</p>
              <div className="swipe-btns">
                <ArrowLeft
                  onClick={() => swiperLearningRef.current.swiper.slidePrev()}
                  className="icon text-blue"
                />
                <ArrowRight
                  onClick={() => swiperLearningRef.current.swiper.slideNext()}
                  className="icon text-blue"
                />
              </div>
            </div>
            <Swiper
              ref={swiperLearningRef}
              spaceBetween={20}
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
              {objectives.map(function (obj, index) {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative flex flex-col items-start justify-center rounded-[4px] text-black shadow-card bg-white max-w-[412px] h-[338px] p-[32px] mediamax-1023:p-[30px] mediamax-1023:max-w-[380px] mediamax-1023:h-[300px] mediamax-950:p-[28px] mediamax-950:max-w-[350px] mediamax-950:h-[280px]">
                      <GroupFlesh className="absolute top-0 right-0 h-[60%] w-fit" />
                      <GroupArrow className="absolute bottom-0 left-0 h-[60%] w-fit" />
                      <p className="text-[64px] text-blue font-bold mediamax-950:text-[40px]">
                        {index + 1}
                      </p>
                      <p className="text-[20px] mediamax-950:text-[18px] line-clamp-3">
                        {obj.objective}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* --------------- Skills gained from this program ------------------ */}
          <div className="w-full pb-[64px] p-horizontal">
            <p className="text-[36px] mediamax-1023:text-[28px] font-bold mediamax-1079:text-[28px] mb-[32px] mediamax-1023:mb-[20px]">
              {data.skills}:
            </p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-[12px]">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center py-[14px] px-[36px] w-fit text-[14px] font-bold text-blue rounded-[2px] border-[2px] border-blue"
                >
                  {item.skill}
                </div>
              ))}
            </div>
          </div>
          {/* --------------- course content -------------------- */}
          <div className="relative pb-[64px]">
            <div className="flex items-center swiper-navigation-header p-horizontal">
              <p className="title">Course Content</p>
              <div className="swipe-btns">
                <ArrowLeft
                  onClick={() =>
                    swiperProgContentRef.current.swiper.slideNext()
                  }
                  className="icon text-blue"
                />
                <ArrowRight
                  onClick={() =>
                    swiperProgContentRef.current.swiper.slidePrev()
                  }
                  className="icon text-blue"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-[36px] py-0 px-[64px] mt-[48px] mediamax-950:flex mediamax-950:flex-wrap mediamax-950:items-center mediamax-950:gap-[20px] mediamax-950:py-0 mediamax-950:px-[64px] mediamax-950:mt-[15px]">
              {chaptersTitles.map((el, index) => (
                <div
                  key={`ctg-${index}`}
                  onClick={() => setselectedTitle(el.label)}
                  className={
                    "relative flex items-center justify-center font-bold font-[inherit] text-[16px] whitespace-nowrap cursor-pointer " +
                    (el.label === selectedTitle
                      ? "text-blue before:absolute before:content-[''] before:h-[2px] before:w-full before:bg-blue before:bottom-0 before:left-0"
                      : "text-[#D2D2D2]")
                  }
                >
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <Swiper
              ref={swiperProgContentRef}
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
              {filtredLessons.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProgramContentCard
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.thumbnail}
                    articleUrl={item.article_url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full px-[20px] flex items items-center justify-center text-center my-[40px]">
              {false ? (
                <Link to={"/academy-lessons/course?course_id=" + course_id}>
                  <div className="w-fit h-[60px] mediamax-1079:h-[50px] py-[8px] px-[60px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] rounded-[4px] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-blue-gradient text-white">
                    Start the course
                  </div>
                </Link>
              ) : (
                <button
                  disabled={isSubmitting}
                  onClick={() => enrollToCourse()}
                  className="w-full max-w-[640px] h-[60px] mediamax-1279:h-[50px] rounded-[4px] py-[8px] px-[60px] text-[20px] mediamax-1279:text-[16px] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-blue-gradient text-white"
                >
                  <span className="w-full">
                    {isSubmitting ? (
                      <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="1"
                        width="35"
                        visible={true}
                      />
                    ) : (
                      <span>Join Course</span>
                    )}
                  </span>
                </button>
              )}
            </div>
          </div>
          {/* --------------- top asked questions ------------- */}
          {questions.length > 0 && (
            <div className="pb-[40px] p-horizontal">
              <p className="text-[36px] mediamax-1023:text-[28px] font-bold mediamax-1079:text-[28px] mb-[32px] mediamax-1023:mb-[20px]">
                {data.faqs}
              </p>
              {questions.map((item, index) => (
                <div key={`question-${index}`} className="mb-[16px]">
                  <Collapsible label={item.faq}>
                    <p>{item.answer}</p>
                  </Collapsible>
                </div>
              ))}
            </div>
          )}
        </div>
        <CallUsBox
          title="Do You Have Any Questions?"
          description="Contact us to provide you with the necessary information."
        />
      </>
    )
  );
}

export default CourseDetails;
