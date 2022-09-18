import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";

function Footer() {
  return (
    <footer className="p-horizontal">
      <a href="#">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="#">الشروط والأحكام</a>
            </li>
            <li>
              <a href="#">الأسئلة الشائعة</a>
            </li>
          </ul>
        </div>
        <p>&copy; 2022 جميع الحقوق محفوظة ابرامج قدقبي قلقذ</p>
      </div>
      <div className="social-icons">
        <Twitter />
        <Linkedin />
      </div>
    </footer>
  );
}

export default Footer;
