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
    <nav className="p-horizontal sticky top-0 flex flex-row justify-between items-center gap-[5vw] py-[20px] w-full h-[100px] z-10 shadow-nav-bar bg-white mediamax-950:justify-between">
      <Menu />
      <div className="flex flex-row items-center">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <p className="ml-[20px] mediamax-950:hidden text-[18px] mediamax-950:text-[16px] text-[#BBB1FB]">
          Learning Management System
        </p>
      </div>
      <div className="mediamax-950:hidden">
        {!auth.user ? (
          <button
            onClick={() => window.location.replace("https://google.com")}
            className="btn-register rounded-[4px]"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => auth.logout()}
            className="font-[inherit] rounded-[4px] text-[16px] font-bold text-black h-[55px] py-[14px] px-[24px] cursor-pointer border-none outline-none mediamax-950:text-[14px] mediamax-950:h-[40px] mediamax-950:py-[8px] mediamax-950:px-[24px] bg-[#d2d2d2]"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
