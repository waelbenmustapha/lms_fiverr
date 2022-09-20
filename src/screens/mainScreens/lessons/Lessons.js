import { useState, useEffect } from "react";
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
      <div className="w-full px-0 py-[100px] mediamax-1279:py-[70px] bg-bg-1 bg-no-repeat">
        <TopPrograms />
        <div className="w-full p-horizontal mb-[40px]">
          <div className="w-full h-[1px] bg-[rgba(21,60,63,0.1)]"></div>
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
