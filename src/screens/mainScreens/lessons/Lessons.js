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
  //store Notification Course data
  const [notificationCourse, setNotificationCourse] = useState(null);

  // filter And Set Top Courses
  const filterAndSetTopCourses = (data) => {
    const filtred = data.filter((el) => el.is_top === true);
    setTopCourses(filtred);
  };

  // filter And Set Feature Course
  const filterAndSetFeatureCourse = (data) => {
    const filtred = data.find((el) => el.is_feature === true);
    setFeatureCourse(filtred);
  };

  // filter And Set Running Course on notification
  const filterAndSetNotificationCourse = (data) => {
    const filtred = data.find((el) => el.is_enrolled === true);
    setNotificationCourse(filtred);
  };

  // get all courses
  const getAllCourses = () => {
    axios
      .get("https://mocki.io/v1/96263ca2-2e4d-4a9e-8de2-8fdc111a8462")
      .then((res) => {
        setAllCourses(res.data);
        filterAndSetTopCourses(res.data);
        filterAndSetFeatureCourse(res.data);
        filterAndSetNotificationCourse(res.data);
      });
  };

  // run api to load the data
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      {notificationCourse && notificationCourse.percentage < 100 && (
        <Notification notificationCourse={notificationCourse} />
      )}
      <Header
        course_id={featureCourse.id}
        title={featureCourse.title}
        description={featureCourse.description}
        image={featureCourse.thumbnail}
        video={featureCourse.preview_video}
        start_date={featureCourse.start_date}
        duration={featureCourse.duration}
        learning_average={"٣ ساعات أسبوعيًا"}
        is_enrolled={featureCourse.is_enrolled}
      />
      <ScoreBox
        title1={`${featureCourse.statistics_one}+`}
        description1="برنامج متاح"
        title2={`${featureCourse.statistics_two}+`}
        description2="تصينف وفئة"
        title3={`${featureCourse.statistics_three}+`}
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
