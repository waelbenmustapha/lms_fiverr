import ContactForm from "../screens/contactForm/ContactForm";
import AllCourses from "../screens/allCourses/AllCourses";
import CoursePage from "../screens/coursePage/CoursePage";
import CourseDetails from "../screens/courseDetails/CourseDetails";
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
import { RequireAuth } from "../components/auth/RequireAuth";
import Signup from "../screens/auth/Signup";
import Authenticate from "../screens/auth/Authenticate";

export const NavBarRoutes = [
  {
    path: "/info",
    component: <Info />,
    name: "من نحن",
    externalLink: "https://google.com/1",
  },
  {
    path: "/prices",
    component: <Prices />,
    name: "اسعار",
    externalLink: "https://google.com/2",

  },
  {
    path: "/services",
    component: <Services />,
    name: "الخدمات",
    externalLink: "https://google.com/3",

  },
  {
    path: "/academy-lessons",
    component: <Lessons />,
    name: "أكاديمية درس",
    externalLink: "https://google.com/4",

  },

  {
    path: "/tools",
    component: <Tools />,
    name: "الأدوات",
    externalLink: "https://google.com/5",

  },
  {
    path: "/news",
    component: <News />,
    name: "الأخبار",
    externalLink: "https://google.com/6",

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
    component: (
      <RequireAuth>
        <CoursePage />
      </RequireAuth>
    ),
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
  { path: "/lms", component: <Authenticate /> },
  {
    path: "/signup",
    component: <Signup />,
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
