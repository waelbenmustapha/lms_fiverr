import { useState, useEffect } from "react";

// Import Components
import CallUsBox from "../../../components/callUsBox/CallUsBox";
import ScoreBox from "../../../components/scoreBox/ScoreBox";
import Notification from "../../../components/notification/Notification";
import Header from "../../../components/header/Header";
import Programs from "../../../components/programs/Programs";
import TopPrograms from "../../../components/topPrograms/TopPrograms";
import { axiosToken } from "../../../utils/apis/AxiosWithToken";
import Loader from "../../../components/Loader";

function Lessons() {
  //store all Courses data
  const [allCourses, setAllCourses] = useState([]);
  //store Top Courses data
  const [topCourses, setTopCourses] = useState([]);
  //store Feature Course data
  const [featureCourse, setFeatureCourse] = useState({});
  const [loading, setLoading] = useState(true);
  //store Notification Course data
  const [notificationCourse, setNotificationCourse] = useState(null);
  const [coursePercentageProgress, setCoursePercentageProgress] = useState(0);

  // convert date to arabic date
  const convertDateToArabic = (input) => {
    var date = new Date(input);
    var dateString = date.toLocaleDateString("ar-EG", {
      // year: "numeric",
      month: "short",
      day: "numeric",
    });
    return dateString;
  };

  // convert Number to Arabic Number
  const convertNumberToArabic = (input) => {
    return input.toLocaleString("ar-EG");
  };

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

  // get Notif percentage Progress
  const getProgress = (id) => {
    axiosToken
      .get(
        "https://mocki.io/v1/e491423e-78ff-494b-b7da-117f77985fea" /*+ `/${id} `*/
      )
      .then((res) => setCoursePercentageProgress(res.data.percentage));
  };

  // filter And Set Running Course on notification
  const filterAndSetNotificationCourse = (data) => {
    const filtred = data.find((el) => el.is_enrolled === true);
    setNotificationCourse(filtred);
    getProgress(filtred.id);
  };

  // get all courses
  const getAllCourses = () => {
    axiosToken
      .get("https://mocki.io/v1/151423ee-4122-4197-8acd-d4c567185536")
      .then((res) => {
        setAllCourses(res.data.items);
        filterAndSetTopCourses(res.data.items);
        filterAndSetFeatureCourse(res.data.items);
        filterAndSetNotificationCourse(res.data.items);
        setLoading(false);
      });
  };

  // run api to load the data
  useEffect(() => {
    getAllCourses();
  }, []);

  if (loading) {
    return (
      <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {notificationCourse && coursePercentageProgress < 100 && (
        <Notification
          id={notificationCourse.id}
          title={notificationCourse.title}
          percentage={coursePercentageProgress}
          progress_time={"أتممت ٣ ساعات من أصل ٢٥ ساعة"}
        />
      )}
      <Header
        course_id={featureCourse.id}
        title={featureCourse.title}
        description={featureCourse.description}
        image={featureCourse.thumbnail}
        video={featureCourse.preview_video}
        start_date={convertDateToArabic(featureCourse.start_date)}
        duration={
          convertNumberToArabic(featureCourse.duration_by_weeks) + " أسابيع"
        }
        learning_average={
          convertNumberToArabic(featureCourse.duration_by_hours_per_week) +
          " ساعات أسبوعيًا"
        }
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
