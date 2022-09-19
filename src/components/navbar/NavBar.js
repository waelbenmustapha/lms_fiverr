import React from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBarRoutes } from "../../utils/Routes";
import logo from "../../assets/images/logo.png";
import Menu from "./Menu";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
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
        <Link to={"login"}>
          <button className="btn-register">تسجيل الدخول</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
