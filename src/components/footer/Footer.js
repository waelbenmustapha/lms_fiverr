import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex relative bottom-0 flex-row mediamax-767:flex-col mediamax-767:gap-[24px] items-center justify-between w-full py-[40px] text-center text-white bg-blue-gradient px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
      <Link to={"/"} className="flex flex-col">
        <img className="logo" src={logo} alt="logo" />
        <span className="text-[16px] text-white font-[400]">
          Learning Management System
        </span>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <ul className="flex flex-row items-center gap-[32px] list-none mediamax-550:flex-col mediamax-550:mb-[24px]">
          <li>
            <a
              className="text-[14px] font-bold no-underline cursor-pointer"
              href="/"
            >
              Privacy Policies
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-bold no-underline cursor-pointer"
              href="/"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-bold no-underline cursor-pointer"
              href="/"
            >
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
