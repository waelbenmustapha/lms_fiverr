import React, { useEffect, useRef, useState } from "react";
import DataElement from "../../components/coursePage/DataElement";
import ReactPlayer from "react-player";
import axios from "axios";
import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";

import "./coursePage.css";
import CoursTextDescription from "../../components/coursePage/CoursTextDescription";
import HelpMe from "../../components/coursePage/HelpMe";
import rewind5 from "../../assets/images/rewind5.png";
import pause from "../../assets/images/pause.png";
import rewind30 from "../../assets/images/rewind30.png";
import { EnrollToCourse, IsOpenDone } from "../../utils/apis/course/CoursePage";
import ArticleFrame from "../../components/coursePage/ArticleFrame";
import { useNavigate, useSearchParams } from "react-router-dom";
import Quizz from "../../components/coursePage/Quizz";
import { axiosToken } from "../../utils/apis/AxiosWithToken";
import Loader from "../../components/Loader";

function CoursePage() {
  //courseData contains an object with all the data about the course related the a user , course name course content ,user progress in course ,user A have X progress in course B etc ...
  const [courseData, setCourseData] = useState(null);
  const [searchParams] = useSearchParams();
  const [videostarted, sertVideoStarted] = useState();
  const [playing, setPlaying] = useState(true);
  const [progressquizz, setProgressQuiz] = useState();
  const navigate = useNavigate();
  //Course id from URL is here
  const course_id = searchParams.get("course_id");
  const playerRef = useRef();
  const [selectedQuizz, setSelectedQuizz] = useState(null);
  //the content selected by the user to show it currently , it's the content inside a section , an object with a type , name , if the user finished it or not ...
  const [selectedContent, setselectedContent] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);

  function onQuizzClick() {
    setSelectedQuizz(courseData.Quizzes);
  }

  //fetching courseData for the current connected user using the userid and the courseID
  async function fetchInitialSelectedContent() {
    axiosToken
      .get("https://mocki.io/v1/a12a6971-19f5-46d9-ae18-113d5e8c55dc")
      .then((res) => {
        setselectedContent(res.data?.all_course_lessons[0].lessons[0]);
      });
  }
  function fetchCourseData() {
    console.log("fetching course data");

    axiosToken
      .get("https://mocki.io/v1/d0fc344c-ac46-4a2c-83c0-1ab16087a620")
      .then((res) => setProgressQuiz(res.data));
    axiosToken
      .get("https://mocki.io/v1/788b305e-aa63-4cde-be10-7efbef8dcd53")
      .then((res) => setCourseDetails(res.data));
    axiosToken
      .get("https://mocki.io/v1/a12a6971-19f5-46d9-ae18-113d5e8c55dc")
      .then((res) => {
        setCourseData(res.data);
      });
  }
  useEffect(() => {
    fetchInitialSelectedContent()
    fetchCourseData();
  }, []);

  useEffect(() => {
    setSelectedQuizz(null);
  }, [selectedContent]);

  //if still loading show loading
  if (
    courseData == null ||
    selectedContent == null ||
    courseDetails == null ||
    progressquizz == null
  ) {
    return (
      <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  } else {
    return courseDetails.is_enrolled ? (
      <div className="h-full flex flex-col">
        <div className="flex flex-row mediamax-767:flex-col-reverse">
          <div className="w-[380px] mediamax-767:w-full mediamax-1079:w-[280px] mediamax-950:w-[240px] flex flex-col bg-[#fafafa] h-[calc(100vh-100px)] mediamax-767:max-h-[40vh]  mediamax-767:h-fit min767:max-h-[800px] ">
            <div className="mb-[40px] mt-[76px] flex items-center gap-[20px]  mediamax-767:mb-[3px]  mediamax-767:mt-[8px] mr-[64px]  mediamax-1079:mr-[40px] mediamax-950:mr-[30px]  mediamax-767:mr-[20px]  mediamax-767:gap-[15px] mediamax-1079:mb-[28px] mediamax-1079:mt-[60px] mediamax-1079:gap-[14px] mediamax-950:mb-[25px] mediamax-950:mt-[50px] mediamax-950:gap-[12px]">
              <p className="text-[18px] font-bold  mediamax-1079:text-[16px]">
                تقدمك بالبرنامج:
              </p>
              <div className="percent mediamax-767:scale-[0.75]">
                <svg>
                  <circle cx="28" cy="28" r="25"></circle>
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    style={{
                      "--percent": parseInt(progressquizz.percentage),
                    }}
                  ></circle>
                </svg>
                <div className="number">
                  <h3>
                    {progressquizz.percentage}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="overflow-y-scroll  mediamax-1079:text-[12px]  mediamax-950:text-[11px] noscrollbar">
              {courseData.all_course_lessons.map((element, index) => (
                <DataElement
                  key={`navelem-${index}`}
                  collapsed={index === 0 ? true : false}
                  selectedContent={selectedContent}
                  setselectedContent={setselectedContent}
                  element={element}
                />
              ))}
              {
                /*courseData.current_progress===100*/ true && (
                  <div className="pt-[17px] pr-[80px] pb-[17px] pl-[64px] flex items-center text-center gap-[8px] flex-row  mediamax-767:pt-[10px]  mediamax-1079:py-[12px] mediamax-1079:pr-[52px] mediamax-950:pr-[40px] mediamax-1079:pl-[50px]  mediamax-1079:gap-[5px] cursor-pointer ">
                    <div
                      onClick={() => {
                        progressquizz.percentage == 100
                          ? onQuizzClick()
                          : alert(
                              "you need to complete all the course to be able to open quizz"
                            );
                      }}
                      className="cursor-pointer  text-[#00EC8B] font-[bold] text-[18px]"
                    >
                      اختبار المعرفة
                    </div>
                    {progressquizz.percentage !== 100 && (
                      <Lock className="opacity-20 mr-auto" />
                    )}
                  </div>
                )
              }
              {progressquizz.is_quiz_finished && (
                <div className="pt-[17px] pr-[80px] pb-[17px] pl-[64px] flex items-center text-center gap-[8px] flex-row  mediamax-767:pt-[10px]  mediamax-1079:py-[12px] mediamax-1079:pr-[52px] mediamax-950:pr-[40px] mediamax-1079:pl-[50px]  mediamax-1079:gap-[5px] cursor-pointer ">
                  <div
                    onClick={() => {
                      navigate("/certificate");
                    }}
                    className="cursor-pointer  font-[bold] text-[18px]"
                  >
                    الحصول على شهادة
                  </div>
                </div>
              )}{" "}
            </div>
          </div>
          <div className=" flex flex-col bg-[#fafafa] h-[calc(100vh-100px)] min767:max-h-[800px]  flex-[1] mediamax-767:h-[50vh] mediamax-767:flex-none">
            {selectedQuizz ? (
              <Quizz
                courseId={courseDetails.id}
                progressquizz={progressquizz}
                data={courseData.Quizzes}
              />
            ) : selectedContent.lesson_type === "article" ? (
              <ArticleFrame
                chapterId={courseDetails.id}
                key={selectedContent.id}
                selectedContent={selectedContent}
                fetchCourseData={fetchCourseData}
                setselectedContent={setselectedContent}
              />
            ) : selectedContent.lesson_type === "video" ? (
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <div
                  className="h-full w-full cursor-pointer absolute top-0 z-[1] left-0 "
                  onClick={() => setPlaying(!playing)}
                ></div>
                {videostarted && (
                  <>
                    <img
                      onClick={() => {
                        setPlaying(!playing);
                      }}
                      className="h-[50px] absolute bottom-[20px] right-[50%] w-[50px] opacity-80 cursor-pointer z-[999]"
                      src={pause}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <img
                        onClick={() =>
                          playerRef.current.seekTo(
                            playerRef.current.getCurrentTime() - 30
                          )
                        }
                        className="h-[50px] opacity-80  w-[50px] cursor-pointer z-[999]"
                        src={rewind30}
                      />
                      <img
                        onClick={() =>
                          playerRef.current.seekTo(
                            playerRef.current.getCurrentTime() - 5
                          )
                        }
                        className="h-[50px] opacity-80  w-[50px] cursor-pointer z-[999]"
                        src={rewind5}
                      />
                    </div>
                  </>
                )}
                <ReactPlayer
                  ref={playerRef}
                  controls={false}
                  onReady={() => sertVideoStarted(true)}
                  config={{
                    file: {
                      attributes: {
                        onContextMenu: (e) => e.preventDefault(),
                        controlsList: "nodownload",
                      },
                    },
                  }}
                  onProgress={(progress) => {
                    if (
                      progress.playedSeconds >
                        playerRef.current.getDuration() * 0.9 &&
                      selectedContent.is_complete === false
                    ) {
                      alert(
                        "Watched more than 90% of the video execute setIsOpen api"
                      );
                      setselectedContent({
                        ...selectedContent,
                        is_complete: true,
                      });
                      IsOpenDone({
                        lesson_id: selectedContent.id,
                        course_id: courseDetails.id,
                      }).then(() => fetchCourseData());
                    }
                  }}
                  playIcon={
                    <div className="flex flex-col justify-center items-center z-[2]">
                      <PlayButton
                        className="text-white h-[56px] w-[56px]"
                        stroke="white"
                      />
                      <p className="text-[24px] font-bold text-white">
                        شغل الفيديو
                      </p>
                    </div>
                  }
                  playing={playing}
                  light={selectedContent.thumbnail}
                  key={selectedContent.id}
                  height={"100%"}
                  width="100%"
                  url={selectedContent.video_url}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className=" flex flex-row mediamax-767:flex-col-reverse">
          <div className="w-[380px] h-full mediamax-767:w-full mediamax-767:h-full mediamax-767:flex mediamax-767:justify-center  mediamax-1079:w-[280px] mediamax-950:w-[240px]">
            <HelpMe />
          </div>
          <CoursTextDescription key={selectedContent.id} description2={selectedContent.description2} text={selectedContent.description} />
        </div>
      </div>
    ) : (
      <div className="h-full flex flex-col justify-center items-center min-h-[calc(100vh-100px-104px)]">
        <p className="text-[48px] leading-[1.2] font-bold mb-[30px] mediamax-1279:mb-[20px] text-center mediamax-1279:text-[32px] mediamax-1023:text-[28px] mediamax-950:text-[24px]">
          الرجاء الانضمام لهذا البرنامج التدريبي للتمكن من تصفحه
        </p>
        <button
          onClick={() =>
            navigate("/academy-lessons/course-details?course_id=" + course_id)
          }
          className=" h-[55px] py-[14px] px-[50px] mt-[30px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color"
        >
          <span>انضم للبرنامج التدريبي</span>
        </button>
      </div>
    );
  }
}

export default CoursePage;
