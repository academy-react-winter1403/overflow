import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode in your app here (e.g., set a class or use context)
  };

  return (
    <div
      className={`flex flex-row-reverse justify-between items-center px-6 py-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white "
      } text-black`}
    >
      <div className="flex flex-row-reverse gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 px-4 py-2 rounded"
              : "text-gray-600 hover:text-black"
          }
        >
          خانه
        </NavLink>
        <NavLink
          to={"/step1"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-600 hover:text-black"
          }
        >
          دوره ها
        </NavLink>
        <NavLink
          to={"/step2"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-600 hover:text-black"
          }
        >
          اساتید
        </NavLink>
        <NavLink
          to={"/step3"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-600 hover:text-black"
          }
        >
          اخبار
        </NavLink>
        <NavLink
          to={"/step3"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-600 hover:text-black"
          }
        >
          ارتباط با ما
        </NavLink>
      </div>

      <div className="flex flex-row-reverse gap-6 items-center">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-2xl">
          {isDarkMode ? (
            <span role="img" aria-label="light-mode">
              🌙
            </span>
          ) : (
            <span role="img" aria-label="dark-mode">
              🌞
            </span>
          )}
        </button>

        {/* User Icon */}
        <button className="text-2xl">
          <span role="img" aria-label="user">
            👤
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
