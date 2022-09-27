import React, { useEffect, useRef, useState } from "react";
import DataElement from "../../components/coursePage/DataElement";
import ReactPlayer from "react-player";
import axios from "axios";
import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";

import "./coursePage.css";
import CoursTextDescription from "../../components/coursePage/CoursTextDescription";
import HelpMe from "../../components/coursePage/HelpMe";
import { IsOpenDone } from "../../utils/apis/course/CoursePage";

function CoursePage() {
  //courseData contains an object with all the data about the course related the a user , course name course content ,user progress in course ,user A have X progress in course B etc ...
  const [courseData, setCourseData] = useState(null);
  const playerRef = useRef();
  //the content selected by the user to show it currently , it's the content inside a section , an object with a type , name , if the user finished it or not ...
  const [selectedContent, setselectedContent] = useState(null);

  //fetching courseData for the current connected user using the userid and the courseID
  function fetchInitialCourseData() {
    console.log("fetching initial course data");

    axios
      .get("https://mocki.io/v1/2e3e38b3-17e1-4b30-9aed-587df34a40c8")
      .then((res) => {
        setCourseData(res.data);
        setselectedContent(res.data?.chapters[0].lessons[0]);
      });
  }
  function fetchCourseData() {
    console.log("fetching course data");
    axios
      .get("https://mocki.io/v1/2e3e38b3-17e1-4b30-9aed-587df34a40c8")
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
    return (
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
                    style={{ "--percent": parseInt(courseData.percentage)  }}
                  ></circle>
                </svg>
                <div className="number">
                  <h3>
                    {courseData.percentage}
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
            </div>
          </div>
          <div className=" flex flex-col bg-[#fafafa] h-[calc(100vh-100px)] min767:max-h-[800px]  flex-[1] mediamax-767:h-[50vh] mediamax-767:flex-none">
            {selectedContent.article_url ? (
              <div className="  h-full flex justify-center items-center">
                <a
                  onClick={() => {
                    setselectedContent({ ...selectedContent, is_open: true });
                    IsOpenDone(selectedContent.id).then(() =>
                      fetchCourseData()
                    );
                  }}
                  href={selectedContent.article_url}
                  className="bg-[#00ec8b] p-[20px] w-[200px] text-center font-[bold] text-[16px]"
                  target="_blank"
                  rel="noreferrer"
                >
                  اقرأ المقال
                </a>
              </div>
            ) : (
              <ReactPlayer
                ref={playerRef}
                controls={true}
                onProgress={(progress) => {
                  if (
                    progress.playedSeconds >
                      playerRef.current.getDuration() / 2 &&
                    selectedContent.is_open === false
                  ) {
                    alert(
                      "Watched more than half the video execute setIsOpen api"
                    );
                    setselectedContent({ ...selectedContent, is_open: true });
                    IsOpenDone(selectedContent.id).then(() =>
                      fetchCourseData()
                    );
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
                playing={true}
                light={selectedContent.thumbnail}
                key={selectedContent.id}
                height={"100%"}
                width="100%"
                url={selectedContent.video_url}
              />
            )}
          </div>
        </div>
        <div className=" flex flex-row mediamax-767:flex-col-reverse">
          <div className="w-[380px] h-full mediamax-767:w-full mediamax-767:h-full mediamax-767:flex mediamax-767:justify-center  mediamax-1079:w-[280px] mediamax-950:w-[240px]">
            <HelpMe />
          </div>
          <CoursTextDescription text={selectedContent.description} />
        </div>
      </div>
    );
  }
}

export default CoursePage;
