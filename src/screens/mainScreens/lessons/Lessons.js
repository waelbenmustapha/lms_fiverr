import { useState, useEffect } from "react";
// Import Local Styles
import "./lessons.css";
// Import needed library
import axios from "axios";

// Import Components
import CallUsBox from "../../../components/callUsBox/CallUsBox";
import ScoreBox from "../../../components/scoreBox/ScoreBox";
import Notification from "../../../components/notification/Notification";
import Header from "../../../components/header/Header";
import Programs from "../../../components/programs/Programs";
import TopPrograms from "../../../components/topPrograms/TopPrograms";

function Lessons() {
  //store Course Progress data
  const [lessonData, setLessonData] = useState({});

  // get Lesson Data
  const getLessonData = () => {
    axios
      .get("https://mocki.io/v1/ba60eba7-cd45-4386-840e-8470157e95a3")
      .then((res) => setLessonData(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getLessonData();
  }, []);

  return (
    <>
      <Notification />
      <Header
        course_id={lessonData.id}
        title={lessonData.title}
        description={lessonData.description}
        image={lessonData.lesson_image}
        start_date={lessonData.start_date}
        duration={lessonData.duration}
        learning_average={lessonData.learning_average}
      />
      <ScoreBox
        title1={`${lessonData.available_program}+`}
        description1="برنامج متاح"
        title2={`${lessonData.nb_classification}+`}
        description2="تصينف وفئة"
        title3={`${lessonData.people_awarded}+`}
        description3="طالب وطالبة"
      />
      <div className="lessons-container">
        <TopPrograms />
        <div className="full px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px] mb-40">
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
