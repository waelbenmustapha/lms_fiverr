import ContactForm from "../screens/contactForm/ContactForm";
import AllCourses from "../screens/allCourses/AllCourses";
import CoursePage from "../screens/coursePage/CoursePage";
import CourseDetails from "../screens/mainScreens/courseDetails/CourseDetails";
import Info from "../screens/mainScreens/info/Info";
import Lessons from "../screens/mainScreens/lessons/Lessons";
import News from "../screens/mainScreens/news/News";
import Prices from "../screens/mainScreens/prices/Prices";
import Services from "../screens/mainScreens/services/Services";
import Tools from "../screens/mainScreens/tools/Tools";
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import NewPassword from "../screens/auth/NewPassword";
import FormSubmission from "../screens/contactForm/FormSubmission";

export const NavBarRoutes = [
  {
    path: "/info",
    component: <Info />,
    name: "من نحن",
  },
  {
    path: "/prices",
    component: <Prices />,
    name: "اسعار",
  },
  {
    path: "/services",
    component: <Services />,
    name: "الخدمات",
  },
  {
    path: "/academy-lessons",
    component: <Lessons />,
    name: "أكاديمية درس",
  },

  {
    path: "/tools",
    component: <Tools />,
    name: "الأدوات",
  },
  {
    path: "/news",
    component: <News />,
    name: "الأخبار",
  },
];

export const AppRoutes = [
  {
    path: "/academy-lessons/all-courses",
    component: <AllCourses />,
  },
  {
    path: "/academy-lessons/course-details",
    component: <CourseDetails />,
  },
  {
    path: "/academy-lessons/course",
    component: <CoursePage />,
  },
];
export const NormalRoutes = [
  {
    path: "/contact-us",
    component: <ContactForm />,
  },
];
export const SoloRoutes = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword />,
  },
  {
    path: "/new-password",
    component: <NewPassword />,
  },
  {
    path: "/form-sucess",
    component: <FormSubmission />,
  },

];
