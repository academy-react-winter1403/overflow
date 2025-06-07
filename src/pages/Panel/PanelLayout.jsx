import React, { useState } from "react";
import { Outlet } from "react-router";
import SidePanel from "../../components/Panel/ SidePanel";
import { getItem } from "../../core/services/common/storage.services";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function PanelLayout() {
  const navigate = useNavigate();
  const token = getItem("token"); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/Register-1");
    }
  }, [navigate, token]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-kalameh ml-20 flex w-9/10 flex-row-reverse rounded-2xl justify-center gap-10 mt-10  max-sm:m-auto max-sm:mt-5 max-sm:flex-row ">

      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-6 bg-gray-700 text-white p-2 rounded-lg z-50 max-sm:block w-10 h-10"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      )}

      <div className={`w-3/12 min-w-50 z-20  max-sm:w-full transition-all duration-300 max-sm:absolute ${isMobile && !isMenuOpen ? "translate-x-5 opacity-0 hidden" : "translate-x-0 opacity-100 block"}`}>
        <SidePanel setIsMenuOpen={setIsMenuOpen}/>
      </div>      

      <div className="w-8/11 rounded-2xl bg-white dark:bg-gray-700 h-185 max-sm:w-full max-sm:mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default PanelLayout;