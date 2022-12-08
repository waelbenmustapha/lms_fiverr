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
                onClick={() => window.location.replace(route.externalLink)}
              >
                <span>{route.name}</span>
              </li>
            ))}
          </ul>
          {!auth.user ? (
            <button
              onClick={() => window.location.replace("https://google.com")}
              className="btn-register"
            >
              تسجيل الدخول
            </button>
          ) : (
            <button
              onClick={() => {
                auth.logout();
              }}
              className="font-[inherit] text-[16px] font-bold text-black h-[55px] py-[14px] px-[24px] cursor-pointer border-none outline-none mediamax-950:text-[14px] mediamax-950:h-[40px] mediamax-950:py-[8px] mediamax-950:px-[24px] bg-[#d2d2d2]"
            >
              تسجيل الخروج
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
