import React, { useEffect, useRef, useState } from "react";
import DataElement from "../../components/coursePage/DataElement";
import ReactPlayer from "react-player";
import axios from "axios";
import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";

import "./coursePage.css";
import CoursTextDescription from "../../components/coursePage/CoursTextDescription";
import HelpMe from "../../components/coursePage/HelpMe";
import rewind5 from "../../assets/images/rewind5.png";
import pause from "../../assets/images/pause.png";
import rewind30 from "../../assets/images/rewind30.png";
import { IsOpenDone } from "../../utils/apis/course/CoursePage";
import ArticleFrame from "../../components/coursePage/ArticleFrame";
import { useNavigate, useSearchParams } from "react-router-dom";
import Quizz from "../../components/coursePage/Quizz";
import { axiosToken } from "../../utils/apis/AxiosWithToken";

function CoursePage() {
  //courseData contains an object with all the data about the course related the a user , course name course content ,user progress in course ,user A have X progress in course B etc ...
  const [courseData, setCourseData] = useState(null);
  const [searchParams] = useSearchParams();
  const [videostarted, sertVideoStarted] = useState();
  const [playing, setPlaying] = useState(true);
  const navigate = useNavigate();
  //Course id from URL is here
  const course_id = searchParams.get("course_id");
  const playerRef = useRef();
  //the content selected by the user to show it currently , it's the content inside a section , an object with a type , name , if the user finished it or not ...
  const [selectedContent, setselectedContent] = useState(null);

  //fetching courseData for the current connected user using the userid and the courseID
  async function fetchInitialCourseData() {
    console.log("fetching initial course data");

    if (course_id === "1") {
      axiosToken
        .get("https://mocki.io/v1/1c4ca225-556b-4ca7-9c73-1948f505295c")
        .then((res) => {
          setCourseData(res.data);
          setselectedContent(res.data?.chapters[0].lessons[0]);
        });
    } else {
    
      axiosToken.get("https://mocki.io/v1/9156fb9e-9815-4644-9e33-37e370a06907")
        .then((res) => {
          setCourseData(res.data);
          setselectedContent(res.data?.chapters[0].lessons[0]);
        });
    }
  }
  function fetchCourseData() {
    console.log("fetching course data");
    axiosToken
      .get("https://mocki.io/v1/1c4ca225-556b-4ca7-9c73-1948f505295c")
      .then((res) => {
        setCourseData(res.data);
      });
  }
  useEffect(() => {
    fetchInitialCourseData();
  }, []);

  //if still loading show loading
  if (courseData == null || selectedContent == null) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  } else {
    return courseData.is_enrolled ? (
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
                      "--percent": parseInt(courseData.current_progress),
                    }}
                  ></circle>
                </svg>
                <div className="number">
                  <h3>
                    {courseData.current_progress}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="overflow-y-scroll  mediamax-1079:text-[12px]  mediamax-950:text-[11px] noscrollbar">
              {courseData.chapters.map((element, index) => (
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
                  <div
                    onClick={() => setselectedContent(courseData.quizz)}
                    className="cursor-pointer flex justify-between items-center text-[#00EC8B] font-[bold] pr-[65px] pl-[65px] mb-[30px] mediamax-767:pr-[25px]  mediamax-767:pl-[25px]  mediamax-767:h-[50px] mediamax-767:mb-[5px]  mediamax-1079:text-[18x]  mediamax-1079:pl-[40px]  mediamax-1079:pr-[40px]  mediamax-1079:mb-[15px] mediamax-950:text-[14px] mediamax-950:px-[30px] mediamax-950:mb-[12px]"
                  >
                    اختبار المعرفة
                  </div>
                )
              }
            </div>
          </div>
          <div className=" flex flex-col bg-[#fafafa] h-[calc(100vh-100px)] min767:max-h-[800px]  flex-[1] mediamax-767:h-[50vh] mediamax-767:flex-none">
            {selectedContent.type === "article" ? (
              <ArticleFrame
                key={selectedContent.id}
                selectedContent={selectedContent}
                fetchCourseData={fetchCourseData}
                setselectedContent={setselectedContent}
              />
            ) : selectedContent.type === "video" ? (
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
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
                      IsOpenDone(
                        selectedContent.id,
                        selectedContent.is_complete
                      ).then(() => fetchCourseData());
                    }
                  }}
                  playIcon={
                    <div className="flex flex-col justify-center items-center">
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
            ) : selectedContent.type === "quizz" ? (
              <Quizz data={courseData.quizz.questions} />
            ) : null}
          </div>
        </div>
        <div className=" flex flex-row mediamax-767:flex-col-reverse">
          <div className="w-[380px] h-full mediamax-767:w-full mediamax-767:h-full mediamax-767:flex mediamax-767:justify-center  mediamax-1079:w-[280px] mediamax-950:w-[240px]">
            <HelpMe />
          </div>
          <CoursTextDescription text={selectedContent.description} />
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
