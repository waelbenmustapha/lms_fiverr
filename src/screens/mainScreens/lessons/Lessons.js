import { useState, useEffect } from "react";

// Import Components
import CallUsBox from "../../../components/callUsBox/CallUsBox";
import ScoreBox from "../../../components/scoreBox/ScoreBox";
import Notification from "../../../components/notification/Notification";
import Header from "../../../components/header/Header";
import Programs from "../../../components/programs/Programs";
import axios from "axios";
import TopPrograms from "../../../components/topPrograms/TopPrograms";

import Loader from "../../../components/Loader";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAxiosToken from "../../../utils/apis/AxiosWithToken";

function Lessons() {
  const auth = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const axiosToken = useAxiosToken();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const token = searchParams.get("token");
  //store all Courses data
  const [allCourses, setAllCourses] = useState([]);
  //store Top Courses data
  const [topCourses, setTopCourses] = useState([]);
  //store Feature Course data
  const [featureCourse, setFeatureCourse] = useState({});
  const [loading, setLoading] = useState(true);
  //store Notification Course data
  const [notificationCourse, setNotificationCourse] = useState(null);
  const [coursePercentageProgress, setCoursePercentageProgress] = useState(100); // by default 100% so not display anything

  function authentic() {
    console.log(token);
    //change the .get to .post
    axios
      .get("https://mocki.io/v1/3aa284c8-6ec8-444b-8ecd-59c95f715b08", {
        email,
        name,
        token,
      })
      .then((res) => {
        auth.login(res.data.token);
        navigate("/");
      })
      .catch(() => console.log("error occured"));
  }

  // useEffect(() => {
  //   if (email && name && token) {
  //     if (localStorage.getItem("motherAppToken") === token) {
  //       console.log("same token");
  //     } else {
  //       localStorage.setItem("motherAppToken", token);
  //       authentic();
  //     }
  //   } else {
  //     auth.logout();
  //   }
  // }, []);
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
    console.log(
      "https://mocki.io/v1/e491423e-78ff-494b-b7da-117f77985fea" + `/${id}`
    );
    axiosToken
      .get(
        "https://mocki.io/v1/e491423e-78ff-494b-b7da-117f77985fea" /*+ `/${id}`*/
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
      .get("https://mocki.io/v1/78837451-fc7c-42a4-b3ad-965038118575")
      .then((res) => {
        setAllCourses(res.data.items);
        filterAndSetTopCourses(res.data.items);
        filterAndSetFeatureCourse(res.data.items);
        if (auth.user) {
          filterAndSetNotificationCourse(res.data.items);
        }
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
        start_date={featureCourse.start_date}
        duration={featureCourse.duration_by_weeks + " weeks"}
        learning_average={featureCourse.duration_by_hours_per_week + " hours"}
        is_enrolled={featureCourse.is_enrolled}
      />
      <ScoreBox
        title1={`${featureCourse.statistics_one}+`}
        description1="Students"
        title2={`${featureCourse.statistics_two}+`}
        description2="Available Courses"
        title3={`${featureCourse.statistics_three}+`}
        description3="Categories"
      />
      <div className="w-full bg-bg-1 bg-right-bottom bg-no-repeat">
        <TopPrograms topPrograms={topCourses} />
        <div className="w-full p-horizontal mb-[40px]">
          <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
        </div>
        <Programs programs={allCourses} />
      </div>
      <CallUsBox
        title="Do You Have Any Questions?"
        description="Contact us to provide you with the necessary information."
      />
    </>
  );
}

export default Lessons;
