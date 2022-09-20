import React from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex relative bottom-0 flex-row mediamax-767:flex-col mediamax-767:gap-[24px] items-center justify-between w-full pt-6 pb-6 text-center text-white bg-primary-color px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <ul className="flex flex-row items-center gap-[32px] list-none mediamax-550:flex-col mediamax-550:mb-[24px]">
            <li>
              <a
                className="text-base font-bold no-underline cursor-pointer"
                href="/"
              >
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a
                className="text-base font-bold no-underline cursor-pointer"
                href="/"
              >
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a
                className="text-base font-bold no-underline cursor-pointer"
                href="/"
              >
                الأسئلة الشائعة
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2022 جميع الحقوق محفوظة ابرامج قدقبي قلقذ</p>
      </div>
      <div className="flex flex-row items-center">
        <Twitter className="w-10 h-10 p-2 cursor-pointer" />
        <Linkedin className="w-10 h-10 p-2 cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
