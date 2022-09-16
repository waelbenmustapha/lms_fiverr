import CoursePage from "../screens/coursePage/CoursePage";
import CourseDetails from "../screens/mainScreens/courseDetails/CourseDetails";
import Info from "../screens/mainScreens/info/Info";
import Lessons from "../screens/mainScreens/lessons/Lessons";
import News from "../screens/mainScreens/news/News";
import Prices from "../screens/mainScreens/prices/Prices";
import Services from "../screens/mainScreens/services/Services";
import Tools from "../screens/mainScreens/tools/Tools";

export const NavBarRoutes = [
  {
    path: "info",
    component: <Info />,
    name: "من نحن",
  },
  {
    path: "prices",
    component: <Prices />,
    name: "اسعار",
  },
  {
    path: "services",
    component: <Services />,
    name: "الخدمات",
  },
  {
    path: "academy-lessons",
    component: <Lessons />,
    name: "أكاديمية درس",
  },
  {
    path: "tools",
    component: <Tools />,
    name: "الأدوات",
  },
  {
    path: "news",
    component: <News />,
    name: "الأخبار",
  },
];

export const AppRoutes = [
  {
    path: "course-details",
    component: <CourseDetails />,
  },
  {
    path: "course",
    component: <CoursePage />,
  },
];
