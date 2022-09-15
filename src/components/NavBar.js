import React from "react";
import "../css/navbar.css";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <nav>
      <div class="navigation">
        <a href="#">
          <img class="logo" src={logo} alt="logo" />
        </a>
        <div class="links">
          <ul>
            <li>
              <a href="#">الأخبار</a>
            </li>
            <li>
              <a href="#">الأدوات</a>
            </li>
            <li class="active">
              <a href="#">أكاديمية درس</a>
            </li>
            <li>
              <a href="#">الخدمات</a>
            </li>
            <li>
              <a href="#">اسعار</a>
            </li>
            <li>
              <a href="#">من نحن</a>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn-register">تسجيل الدخول</button>
    </nav>
  );
}

export default NavBar;
