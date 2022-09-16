import React from "react";
// Import Local Styles
import "./lessons.css";

// Import Components
import CallUsBox from "../../../components/callUsBox/CallUsBox";
import ScoreBox from "../../../components/scoreBox/ScoreBox";
import Notification from "../../../components/notification/Notification";
import Header from "../../../components/header/Header";
import Programs from "../../../components/programs/Programs";
import TopPrograms from "../../../components/topPrograms/TopPrograms";

function Lessons() {
  return (
    <>
      <Notification />
      <Header />
      <ScoreBox
        title1="15+"
        description1="برنامج متاح"
        title2="5+"
        description2="تصينف وفئة"
        title3="500+"
        description3="طالب وطالبة"
      />
      <div className="lessons-container">
        <TopPrograms />
        <div className="full p-horizontal mb-40">
          <div className="devider"></div>
        </div>
        <Programs />
      </div>
      <CallUsBox
        title="تواصل معنا؟"
        description="تواصل معنا لمساعدتك على تحديد الدورة الأنسب لك"
      />
    </>
  );
}

export default Lessons;
