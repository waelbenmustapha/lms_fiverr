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
  //store all Courses data
  const [allCourses, setAllCourses] = useState([]);
  //store Top Courses data
  const [topCourses, setTopCourses] = useState([]);
  //store Feature Course data
  const [featureCourse, setFeatureCourse] = useState({});

  // filter And Set Top Courses
  const filterAndSetTopCourses = (data) => {
    const filtred = data.filter((el) => el.is_top === true);
    setTopCourses(filtred);
  };

  // filter And Set Feature Course
  const filterAndSetFeatureCourse = (data) => {
    const filtred = data.find((el) => el.is_featured === true);
    setFeatureCourse(filtred);
  };

  // get all courses
  const getAllCourses = () => {
    axios
      .get("https://mocki.io/v1/bf36b2d1-2551-4e1f-884e-a545b8eb6876")
      .then((res) => {
        setAllCourses(res.data);
        filterAndSetTopCourses(res.data);
        filterAndSetFeatureCourse(res.data);
      });
  };

  // run api to load the data
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      <Notification />
      <Header
        course_id={featureCourse.id}
        title={featureCourse.title}
        description={featureCourse.description}
        image={featureCourse.thumbnail}
        start_date={featureCourse.start_date}
        duration={featureCourse.duration}
        learning_average={"٣ ساعات أسبوعيًا"}
        is_enrolled={featureCourse.is_enrolled}
      />
      <ScoreBox
        title1={`${featureCourse.analytic1}+`}
        description1="برنامج متاح"
        title2={`${featureCourse.analytic2}+`}
        description2="تصينف وفئة"
        title3={`${featureCourse.analytic3}+`}
        description3="طالب وطالبة"
      />
      <div className="w-full px-0 py-[100px] mediamax-1279:py-[70px] bg-bg-1 bg-no-repeat">
        <TopPrograms topPrograms={topCourses} />
        <div className="w-full p-horizontal mb-[40px]">
          <div className="w-full h-[1px] bg-[rgba(21,60,63,0.1)]"></div>
        </div>
        <Programs programs={allCourses} />
      </div>
      <CallUsBox
        title="تواصل معنا؟"
        description="تواصل معنا لمساعدتك على تحديد الدورة الأنسب لك"
      />
    </>
  );
}

export default Lessons;
