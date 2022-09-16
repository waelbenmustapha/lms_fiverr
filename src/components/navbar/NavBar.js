import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { NavBarRoutes } from "../../utils/Routes";

function NavBar() {
  return (
    <nav>
      <div className="navigation">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="links">
          <ul>
            {NavBarRoutes.map((route, index) => (
              <li key={index}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn-register">تسجيل الدخول</button>
    </nav>
  );
}

export default NavBar;
