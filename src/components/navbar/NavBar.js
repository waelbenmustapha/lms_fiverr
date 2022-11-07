import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBarRoutes } from "../../utils/Routes";
import logo from "../../assets/images/logo.png";
import Menu from "./Menu";
import { useAuth } from "../../contexts/AuthContext";

function NavBar() {
  // get authenticated user
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="p-horizontal sticky top-0 flex flex-row items-center gap-[5vw] py-[20px] w-full h-[100px] z-10 shadow-nav-bar bg-white mediamax-950:justify-between">
      <Menu />
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="flex flex-row items-center justify-between w-full mediamax-950:hidden">
        <div className="links">
          <ul className="flex flex-row items-center gap-[32px] list-none">
            {NavBarRoutes.map((route, index) => (
              <div key={`nav-${index}`}>
                <li
                  className={
                    location.pathname.startsWith(route.path) ||
                    (location.pathname === "/" &&
                      route.path === "/academy-lessons")
                      ? "relative before:absolute before:content-[''] before:bottom-[-4px] before:w-full before:h-[2px] before:bg-blue "
                      : ""
                  }
                  onClick={() => navigate(route.path)}
                  key={index}
                >
                  <span className="text-primary-color text-[16px] font-bold no-underline cursor-pointer">
                    {route.name}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        {!auth.user ? (
          <button
            onClick={() => window.location.replace("https://google.com")}
            className="btn-register"
          >
            تسجيل الدخول
          </button>
        ) : (
          <a href="/">
            <button
              onClick={() => auth.logout()}
              className="font-[inherit] text-[16px] font-bold text-primary-color h-[55px] py-[14px] px-[24px] cursor-pointer border-none outline-none mediamax-950:text-[14px] mediamax-950:h-[40px] mediamax-950:py-[8px] mediamax-950:px-[24px] bg-[#d2d2d2]"
            >
              تسجيل الخروج
            </button>
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
