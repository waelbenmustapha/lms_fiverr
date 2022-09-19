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
      <div className="containerp">
        <div className="videoandsidebar">
          <div className="sidebar bottomselect">
            <div className="textandprogress">
              <p className="takadom">تقدمك بالبرنامج:</p>
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
            <div className="datascroll">
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
          <div className=" onScreenContent player">
            {selectedContent.type === "video" ? (
              <ReactPlayer
                controls={true}
                playIcon={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PlayButton
                      style={{ color: "white", height: "56px", width: "56px" }}
                      stroke="white"
                    />
                    <p
                      style={{
                        fontSize: "24px",
                        fontFamily: "bold",
                        color: "white",
                      }}
                    >
                      شغل الفيديو
                    </p>
                  </div>
                }
                onClickPreview={() => console.log("hi")}
                playing={true}
                light={selectedContent.thumbnail}
                key={selectedContent.id}
                className="react-player"
                height={"100%"}
                width="100%"
                url={selectedContent.url}
              />
            ) : selectedContent.type === "text" ? (
              <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}></div>
            ) : null}
          </div>
        </div>
        <div className="helpanddescription">
          <div className="helpme">
            <HelpMe />
          </div>
          <CoursTextDescription text={selectedContent.text} />
        </div>
      </div>
    );
  }
}

export default CoursePage;
