import Info from "../screens/mainScreens/info/Info";
import Lessons from "../screens/mainScreens/lessons/Lessons";
import News from "../screens/mainScreens/news/News";
import Prices from "../screens/mainScreens/prices/Prices";
import Services from "../screens/mainScreens/services/Services";
import Tools from "../screens/mainScreens/tools/Tools";

export const NavBarRoutes = [
  {
    path: "news",
    component: <News />,
    name: "الأخبار",
  },
  {
    path: "tools",
    component: <Tools />,
    name: "الأدوات",
  },
  {
    path: "academy-lessons",
    component: <Lessons />,
    name: "أكاديمية درس",
  },
  {
    path: "services",
    component: <Services />,
    name: "الخدمات",
  },
  {
    path: "prices",
    component: <Prices />,
    name: "اسعار",
  },

  {
    path: "info",
    component: <Info />,
    name: "من نحن",
  },
];
