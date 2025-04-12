import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../../assets/Header/user.png";
import moon from "../../assets/Header/moon.png";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode in your app here (e.g., set a class or use context)
  };

  return (
    <div
      className={`flex flex-row-reverse justify-between items-center px-6 py-4 ${
        isDarkMode ? "bg-gray-800 text-white" : ""
      } text-black`}
    >
      <div className="mt-14 mr-25 gap-11 flex items-center text-gray-400 text-[22px] font-kalameh font-bold flex-row-reverse ">
        {/* Logo */}
        <div className="mb-1 relative w-7  shrink-0 h-7 hover:scale-110 transition-transform">
          <div className="bg-deep-blue opacity-95 z-2 rounded-[6px] rotate-45 -skew-20 w-full h-full absolute"></div>
          <div className="bg-black opacity-92 mt-[10px] z-0  rounded-[6px] rotate-45 -skew-20 w-full h-full "></div>
        </div>
        {/* ======== */}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-gray-500" : " hover:text-black"
          }
        >
          خانه
        </NavLink>
        <NavLink
          to={"/Register-1"}
          className={({ isActive }) =>
            isActive ? "text-gray-500" : " hover:text-black"
          }
        >
          دوره ها
        </NavLink>
        <NavLink
          to={"/Register-2"}
          className={({ isActive }) =>
            isActive ? "text-gray-500" : " hover:text-black"
          }
        >
          اساتید
        </NavLink>
        <NavLink
          to={"/Register-3"}
          className={({ isActive }) =>
            isActive ? "text-gray-500" : " hover:text-black"
          }
        >
          اخبار
        </NavLink>
        <NavLink
          to={"/Courses/0ed74730-9012-ef11-b6c2-f4b229435c5d"}
          className={({ isActive }) =>
            isActive ? "text-gray-500" : " hover:text-black"
          }
        >
          ارتباط با ما
        </NavLink>
      </div>

      <div className="mt-14 ml-32 flex flex-row-reverse gap-3 items-center">
       
        {/* moon */}
        <div onClick={toggleDarkMode} 
        className="bg-deep-blue cursor-pointer flex justify-center items-center rounded-full w-12 h-12 ">
         <div>
            <img
              src={moon}
              alt="moon"
              className="w-8 h-8 scale-130 hover:scale-150 transition-transform duration-200"
            />
          
         </div>
        </div>
        {/* User Icon */}
        <Link to={"/Register-1"} >
        <div className="bg-deep-blue cursor-pointer flex justify-center items-center rounded-full w-12 h-12 ">
         <div>
            <img
              src={user}
              alt="user"
              className="w-8 h-8 scale-120 hover:scale-130 transition-transform duration-200"
            />
          
         </div>
        </div>
        </Link>
        {/* Search Icon */}
      </div>
    </div>
  );
}

export default Header;
