import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarRoutes } from "../../utils/Routes";
import { KEY_CODES } from "../../utils/keyCodes";
import { useOnClickOutside } from "../../hooks";
import "./menu.css";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const hideMenu = () => {
    setMenuOpen(false);
  };

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => hideMenu());

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        hideMenu();
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 900) {
      hideMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <div className="menu">
      <div ref={wrapperRef}>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className={menuOpen ? "hamburger is-active" : "hamburger"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div ref={navRef} className={menuOpen ? "links is-active" : "links"}>
          <ul>
            {NavBarRoutes.map((route, index) => (
              <div>
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
          <button className="btn-register">تسجيل الدخول</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
