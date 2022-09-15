import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { NavBarRoutes } from "../../utils/Routes";

function NavBar() {
  return (
    <nav>
      <div class="navigation">
        <a href="#">
          <img class="logo" src={logo} alt="logo" />
        </a>
        <div class="links">
          <ul>
            {NavBarRoutes.map((route) => (
              <li>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button class="btn-register">تسجيل الدخول</button>
    </nav>
  );
}

export default NavBar;
