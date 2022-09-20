import React, { useEffect, useState } from "react";
import DataElement from "../../components/coursePage/DataElement";
import ReactPlayer from "react-player";
import axios from "axios";
import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";

import "./coursePage.css";
import CoursTextDescription from "../../components/coursePage/CoursTextDescription";
import HelpMe from "../../components/coursePage/HelpMe";

function CoursePage() {
  //courseData contains an object with all the data about the course related the a user , course name course content ,user progress in course ,user A have X progress in course B etc ...
  const [courseData, setCourseData] = useState(null);

  //the content selected by the user to show it currently , it's the content inside a section , an object with a type , name , if the user finished it or not ...
  const [selectedContent, setselectedContent] = useState(null);

  //fetching courseData for the current connected user using the userid and the courseID
  function fetchCourseData() {
    axios
      .get("https://mocki.io/v1/6faf00e5-4603-4bc3-adf3-90d605b72c45")
      .then((res) => {
        setCourseData(res.data);
        setselectedContent(res.data?.sections[0].content[0]);
      });
  }
  useEffect(() => {
    fetchCourseData();
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
        <div className="flex flex-row">
          <div className="w-[380px] flex flex-col bg-[#fafafa] h-[calc(100vh-100px)]">
            <div className="mb-[40px] mt-[76px] flex items-center gap-[20px] mr-[60px] ">
              <p className="text-[14px]">تقدمك بالبرنامج:</p>
              <div className="percent">
                <svg>
                  <circle cx="28" cy="28" r="25"></circle>
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    style={{ "--percent": courseData.totalProgress }}
                  ></circle>
                </svg>
                <div className="number">
                  <h3>
                    {courseData.totalProgress}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="overflow-y-scroll ">
              {courseData.sections.map((element, index) => (
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
          <div className=" flex flex-col flex-[1] h-[calc(100vh-100px)]">
            {selectedContent.type === "video" ? (
              <ReactPlayer
                controls={true}
                playIcon={
                  <div className="flex flex-col justify-center items-center">
                    <PlayButton
                      className="text-white h-[56px] w-[56px]"
                      stroke="white"
                    />
                    <p className="text-[24px] font-[bold] text-white">
                      شغل الفيديو
                    </p>
                  </div>
                }
                playing={true}
                light={selectedContent.thumbnail}
                key={selectedContent.id}
                height={"100%"}
                width="100%"
                url={selectedContent.url}
              />
            ) : selectedContent.type === "text" ? (
              <div className="bg-[#f2f2f2] h-full"></div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[380px] h-full ">
            <HelpMe />
          </div>
          <CoursTextDescription text={selectedContent.text} />
        </div>
      </div>
    );
  }
}

export default CoursePage;
