import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../../assets/Header/user.png";
import moon from "../../assets/Header/moon.png";
import sun from "../../assets/Header/sun.png";
import homeIcon from "../../assets/Header/home.png";
import learningIcon from "../../assets/Header/learning.png";
import newspaperIcon from "../../assets/Header/newspaper-folded.png";
import profile from "../../assets/Header/profile.png";
import {
  getItem,
  getItemGeneric,
  setItem,
} from "../../core/services/common/storage.services.js";

// navigation for desktop
const DesktopNavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "text-gray-500" : "hover:text-black"
    }
  >
    {children}
  </NavLink>
);

// navigation for mobile
const MobileNavItem = ({ to, icon, alt }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `h-full rounded-md ${isActive ? "bg-white/30" : "hover:bg-white/20"}`
    }
  >
    <img src={icon} alt={alt} className="mx-auto h-8 w-8 object-contain" />
  </NavLink>
);

function Header() {
  const token = getItem("token");

  // Dark Mode
  const [isDarkMode, setisDarkMode] = useState(
    () => getItemGeneric("darkMode") === "true",
  );
  useEffect(() => {
    setItem("darkMode", isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark"); // Adds 'dark' class if dark mode is not active
    } else {
      document.documentElement.classList.remove("dark"); // Removes 'dark' class if dark mode is active
    }
  }, [isDarkMode]);
  const handelToggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };
  ///

  return (
    <div className="">
      {/* Desktop Navigation */}
      <div className="flex flex-row-reverse items-center justify-between px-6 py-4 text-white max-md:hidden dark:bg-[#1b263ddb] dark:text-black">
        <div className="font-kalameh max-lg: z-10 mt-14 mr-25 flex flex-row-reverse items-center gap-11 text-[22px] font-bold text-gray-400">
          {/* Logo */}
          <div className="relative mb-1 h-7 w-7 shrink-0 transition-transform hover:scale-110">
            <div className="bg-deep-blue absolute z-2 h-full w-full rotate-45 -skew-20 rounded-[6px] opacity-95"></div>
            <div className="z-0 mt-[10px] h-full w-full rotate-45 -skew-20 rounded-[6px] bg-black opacity-92"></div>
          </div>
          {/* ======== */}
          <DesktopNavItem to="/">خانه</DesktopNavItem>
          <DesktopNavItem to="/AllCourses">دوره ها</DesktopNavItem>
          <DesktopNavItem to="/teachers">اساتید</DesktopNavItem>
          <DesktopNavItem to="/News">اخبار</DesktopNavItem>
          <DesktopNavItem to="/sendyourthing">ارتباط با ما</DesktopNavItem>
        </div>

        <div className="mt-14 ml-32 flex flex-row-reverse items-center gap-3">
          {/* Dark Mode Toggle */}
          <div
            onClick={handelToggleDarkMode}
            className="bg-deep-blue mr-15 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
          >
            <div>
              <img
                src={isDarkMode ? sun : moon}
                alt={isDarkMode ? "sun" : "moon"}
                className="h-8 w-8 scale-130 transition-transform duration-200 hover:scale-150"
              />
            </div>
          </div>

          <Link to={"/panel"}>
            <div className="bg-deep-blue flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
              <div>
                <img
                  src={user}
                  alt="user"
                  className="h-8 w-8 scale-120 transition-transform duration-200 hover:scale-130"
                />
              </div>
            </div>
          </Link>
          {/* Search Icon */}
        </div>
      </div>
      {/* mobile mode */}

      <nav className="bg-deep-blue fixed bottom-0 z-100 grid w-full grid-cols-4 items-center justify-center gap-2 px-2 py-2 text-center shadow-2xl md:hidden">
        <MobileNavItem to="/panel" icon={profile} alt="Me" />
        <MobileNavItem to="/news" icon={newspaperIcon} alt="News" />
        <MobileNavItem to="/AllCourses" icon={learningIcon} alt="Courses" />
        <MobileNavItem to="/" icon={homeIcon} alt="Home" />
      </nav>
    </div>
  );
}

export default Header;
