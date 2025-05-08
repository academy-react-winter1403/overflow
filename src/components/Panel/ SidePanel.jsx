import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/userpanel/Logo.png';  
import home from '../../assets/userpanel/home.png';  
import courses from '../../assets/userpanel/Path 29.png';  
import ticket from '../../assets/userpanel/Path 30.png';  
import profile from '../../assets/userpanel/Path 31.png';  
import exit from '../../assets/userpanel/Path 32.png';  
import fave from '../../assets/userpanel/fave.png';
import secur from '../../assets/userpanel/security.png'
import comm from '../../assets/userpanel/commets-removebg-preview.png'
import commnews from '../../assets/userpanel/9189092.png'
import favenews from '../../assets/userpanel/favenews.png';
import { setItem } from '../../core/services/common/storage.services';
import { useNavigate } from 'react-router-dom';
function SidePanel() {
  const navigate = useNavigate();
  const logout =() =>{
  setItem("token","");
    navigate("/login")
  }
  return (
    <div className=" bg-white h-180 rounded-2xl  dark:bg-gray-800">
      <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9'>
        <img className='w-2/10' src={logo} alt="Logo" />
        <span className='text-deep-blue text-2xl font-bold mr-5 max-sm:text-xs max-sm:font-bold'>آکادمی سپهر</span>
      </div>

      <div className="flex flex-col items-end w-10/10 h-auto mt-10 ">
        {[
          { icon: home, to: '/Panel', label: 'داشبورد' },
          { icon: courses, to: '/panel/mycourse', label: 'دوره های من' },
          { icon: ticket, to: '/panel/coursereserve', label: 'دوره های رزرو شده' },
          { icon: fave, to: '/panel/favecourse', label: 'دوره های مورد علاقه' },
          { icon: favenews, to: '/panel/Favenews', label: 'اخبار مورد علاقه' },
          { icon: secur, to: '/panel/security', label: 'امنیت' },
          { icon: comm, to: '/panel/Mycomment', label: 'نظرات من' },
          { icon: commnews, to: '/panel/Mynewscomment', label: ' نظرات خبری' },
          { icon: profile, to: '/panel/panelpersoninfo', label: 'جزییات حساب' }
        ].map((item, idx) => (
          <div key={idx} className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
            <img className="w-1/10" src={item.icon} alt={item.label} />
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'font-bold text-3xl' : 'text-gray-500'}>
              <span className="mr-5 text-gray-500 dark:text-white max-lg:text-sm ">{item.label}</span>
            </NavLink>
          </div>
        ))}

        <button onClick={logout} className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm bg-transparent border-none">
          <img className="w-1/10" src={exit} alt="خروج" />
          <span className="mr-5 text-gray-500 dark:text-white">خروج</span>
        </button>
      </div>
    </div>
  );
}

export default SidePanel;