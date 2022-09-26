import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBarRoutes } from "../../utils/Routes";
import { KEY_CODES } from "../../utils/keyCodes";
import { useOnClickOutside } from "../../hooks";
import { useAuth } from "../../contexts/AuthContext";

const Menu = () => {
  // get authenticated user
  const auth = useAuth();
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
              <li
                key={`nav-${index}`}
                className={
                  location.pathname.startsWith(route.path) ||
                  (location.pathname === "/" &&
                    route.path === "/academy-lessons")
                    ? "active"
                    : ""
                }
                onClick={() => navigate(route.path)}
              >
                <span>{route.name}</span>
              </li>
            ))}
          </ul>
          {!auth.user ? (
            <Link to={"login"}>
              <button className="btn-register">تسجيل الدخول</button>
            </Link>
          ) : (
            <Link to={"/"}>
              <button onClick={() => auth.logout()} className="btn-register">
                {" "}
                تسجيل الخروج
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
