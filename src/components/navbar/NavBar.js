import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { NavBarRoutes } from "../../utils/Routes";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  return (
    <nav>
      <div className="navigation">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="links">
          <ul>
            {NavBarRoutes.map((route, index) => (
              <div >
                <li className={location.pathname.startsWith(route.path)||(location.pathname==="/"&&route.path==="/academy-lessons")?"active":""} onClick={()=>navigate(route.path)} key={index}>
                  <a >{route.name}</a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn-register">تسجيل الدخول</button>
    </nav>
  );
}

export default NavBar;
