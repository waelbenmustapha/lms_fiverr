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
import { ReactComponent as ArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";

// import components
import CallUsBox from "../../components/callUsBox/CallUsBox";
import Header from "../../components/header/Header";
import ScoreBox from "../../components/scoreBox/ScoreBox";
import Collapsible from "../../components/Collapsible/Collapsible";
import ProgramContentCard from "../../components/programContentCard/ProgramContentCard";
import { EnrollToCourse } from "../../utils/apis/course/CoursePage";
import { RotatingLines } from "react-loader-spinner";
import { useAuth } from "../../contexts/AuthContext";
import { axiosToken } from "../../utils/apis/AxiosWithToken";

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
      navigate("/login");
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

  // get all Course Data
  const getData = () => {
    axiosToken
      .get("https://mocki.io/v1/ca365d59-ae34-4e50-861b-c06d117dcd10")
      .then((res) => {
        setData(res.data);
        setObjectives(res.data.objective_desc);
        setSkills(res.data.skills_desc);
        setCourseContent(res.data.chapters);
        setQuestions(res.data.faq_desc);
        setJoined(res.data.is_enrolled);
      });
  };

  // run api to load the data
  useEffect(() => {
    getData();
  }, []);

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
          duration={
            data.duration_by_weeks &&
            data.duration_by_weeks.toLocaleString("ar-EG") + " أسابيع"
          }
          learning_average={
            data.duration_by_hours_per_week &&
            data.duration_by_hours_per_week.toLocaleString("ar-EG") +
              " ساعات أسبوعيًا"
          }
          is_enrolled={data.is_enrolled}
          is_course_details={true}
        />
        <ScoreBox
          title1={`${data.statistics_one}+`}
          description1="ساعة مسجلة"
          title2={`${data.statistics_two}+`}
          description2="مقال ذات صلة"
          title3={data.statistics_three}
          description3="إتمام البرنامج"
        />

        {/* ---------- course details ---------------- */}
        <div className="py-[100px] bg-bg-1 bg-no-repeat mediamax-1023:py-[50px] mediamax-950:py-[40px]">
          <div className="p-horizontal">
            <p className="font-[inherit] text-[32px] font-bold mb-[30px] mediamax-1023:text-[28px] mediamax-1023:mb-[20px] mediamax-950:text-[24px] ">
              {data.about_title}
            </p>
            <p className="font-[inherit] text-[20px] mb-[100px] mediamax-1023:text-[20px] mediamax-1023:mb-[60px] mediamax-950:text-[18px] mediamax-950:mb-[60px]">
              {data.about_desc}
            </p>
          </div>
          {/* ------- course objectives ------- */}
          <div className="mb-[60px]">
            <div className="swiper-navigation-header p-horizontal">
              <p className="title">{data.objectives}:</p>
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
              {objectives.map(function (obj, index) {
                if (index % 2 === 0) {
                  return (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-start justify-center p-[32px] mediamax-1023:p-[30px] mediamax-1023:max-w-[380px] mediamax-1023:h-[300px] mediamax-950:p-[28px] mediamax-950:max-w-[350px] mediamax-950:h-[280px] text-primary-color bg-[#fafafa] max-w-[412px] h-[338px]">
                        <p className="text-[80px] font-bold mediamax-1023:text-[60px] mediamax-950:text-[40px]">
                          {index + 1}
                        </p>
                        <p className="text-[24px] font-bold mediamax-1023:text-[20px] mediamax-950:text-[18px]">
                          {obj.objective}
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
                          {obj.objective}
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
              {data.skills}:
            </p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-[16px]">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center py-[14px] px-[36px] w-fit text-primary-color border-[2px] border-primary-color"
                >
                  {item.skill}
                </div>
              ))}
            </div>
          </div>
          {/* --------------- course content -------------------- */}
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
              {chaptersTitles.map((el, index) => (
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
            <div className="w-full px-[20px] flex items items-center justify-center mt-[40px]">
              <div>
                {joined ? (
                  <Link to={"/academy-lessons/course?course_id=" + course_id}>
                    <div className="w-fit h-[60px] mediamax-1079:h-[50px] py-[8px] px-[60px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color">
                      ابدأ دورتك الآن
                    </div>
                  </Link>
                ) : (
                  <button
                    disabled={isSubmitting}
                    onClick={() => enrollToCourse()}
                    className="w-fit h-[60px] mediamax-1279:h-[50px] py-[8px] px-[60px] text-[20px] mediamax-1279:text-[16px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color"
                  >
                    {isSubmitting ? (
                      <span className="px-[64px] mediamax-1279:px-[40px]">
                        <RotatingLines
                          strokeColor="white"
                          strokeWidth="5"
                          animationDuration="1"
                          width="35"
                          visible={true}
                        />
                      </span>
                    ) : (
                      <span>انضم للدورة التدريبية</span>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* ------- devider ------ */}
          <div className="w-full p-horizontal">
            <div className="w-full h-[1px] bg-[rgba(21,60,63,0.1)]"></div>
          </div>
          {/* --------------- top asked questions ------------- */}
          {questions.length > 0 && (
            <div className="py-[100px] mediamax-1023:py-[70px] mediamax-950:py-[50px] p-horizontal">
              <p className="text-[32px] mediamax-1079:text-[24px] mb-[40px]">
                {data.faqs}
              </p>
              <div>
                <div className="mb-[16px]">
                  <Collapsible label={questions[0].faq}>
                    <p>{questions[0].answer}</p>
                  </Collapsible>
                </div>
                <div className="mb-[16px]">
                  <Collapsible label={questions[1].faq}>
                    <p>{questions[1].answer}</p>
                  </Collapsible>
                </div>
                <div className="mb-[16px]">
                  <Collapsible label={questions[2].faq}>
                    <p>{questions[2].answer}</p>
                  </Collapsible>
                </div>
              </div>
            </div>
          )}
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
