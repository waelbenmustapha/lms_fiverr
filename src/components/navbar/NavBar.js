import React from "react";
import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarRoutes } from "../../utils/Routes";
import logo from "../../assets/images/logo.png";
import Menu from "./Menu";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="p-horizontal">
      <Menu />
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="navigation">
        <div className="links">
          <ul>
            {NavBarRoutes.map((route, index) => (
              <div key={`nav-${index}`}>
                <li
                  className={
                    location.pathname.startsWith(route.path) ||
                    (location.pathname === "/" &&
                      route.path === "/academy-lessons")
                      ? "active"
                      : ""
                  }
                  onClick={() => navigate(route.path)}
                  key={index}
                >
                  <span>{route.name}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <button className="btn-register">تسجيل الدخول</button>
      </div>
    </nav>
  );
}

export default NavBar;
