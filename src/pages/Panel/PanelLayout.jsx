import React from "react";
import { Outlet } from "react-router";
import SidePanel from "../../components/Panel/ SidePanel";
import { getItem } from "../../core/services/common/storage.services";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function PanelLayout() {
    const navigate = useNavigate();
    const token = getItem("token"); 
    
    useEffect(() => {
        if (!token) {
            navigate("/Register-1");
        }
    }, [navigate, token]);  
  return (
    <div className="font-kalameh ml-20 flex w-9/10 flex-row-reverse rounded-2xl justify-between mt-10">
      <div className="w-3/12 min-w-50 ">
        <SidePanel />
      </div>
      <div className=" w-8/11 rounded-2xl bg-white dark:bg-gray-700">
        <Outlet />
      </div>
    </div>
  );
}

export default PanelLayout;
