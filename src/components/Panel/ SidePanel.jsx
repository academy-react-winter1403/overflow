import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/userpanel/Logo.png';  
import dashboard from '../../assets/userpanel/icons8-dashboard-100.png';  
import courses from '../../assets/userpanel/icons8-blue-book-48.png';  
import ticket from '../../assets/userpanel/icons8-reservation-100.png';  
import profile from '../../assets/userpanel/icons8-user-48.png';  
import exit from '../../assets/userpanel/icons8-exit-48.png';  
import fave from '../../assets/userpanel/icons8-favorite-folder-40.png';
import secur from '../../assets/userpanel/icons8-security-lock-48.png'
import comm from '../../assets/userpanel/icons8-comments-48.png'
import commnews from '../../assets/userpanel/icons8-interview-48.png'
import favenews from '../../assets/userpanel/icons8-news-48.png';
import { setItem } from '../../core/services/common/storage.services';
import { useNavigate } from 'react-router-dom';
import { Getprofile } from '../../core/services/api/userpanelapi/panelapis';

function SidePanel() {

  const [Profile, setProfile] = useState(null); 

  const navigate = useNavigate();
  const logout =() =>{
  setItem("token","");
    navigate("/login")

    }; 

    const profileInfo = async () => {

        try {
            const response = await Getprofile();

            setProfile(response);

        } catch (error) {
            console.log('Error from profileInfo:', error);
        }

  }
  
    useEffect(() => {
          profileInfo();
    }, []);

  return (
    <div className=" bg-white h-185 rounded-2xl  dark:bg-gray-800 ">
      <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9   '>
        <img className='w-15 h-15 rounded-[50px]' src={Profile?.userImage?.[0]?.puctureAddress || logo} alt="User Profile"/>
        <span className='text-deep-blue text-2xl font-bold mr-5 max-sm:text-xs max-sm:font-bold dark:text-white'> {Profile?.fName} {Profile?.lName}  </span>
      </div>

      <div className="flex flex-col items-end w-10/10 h-aut0 mt-10 font-iransans  ">
        {[
          { icon: dashboard, to: '/Panel', label: 'داشبورد' },
          { icon: courses, to: '/panel/mycourse', label: 'دوره های من' },
          { icon: ticket, to: '/panel/coursereserve', label: 'دوره های رزرو شده' },
          { icon: fave, to: '/panel/favecourse', label: 'دوره های مورد علاقه' },
          { icon: favenews, to: '/panel/Favenews', label: 'اخبار مورد علاقه' },
          { icon: comm, to: '/panel/Mycomment', label: 'نظرات  دوره ها' },
          { icon: commnews, to: '/panel/Mynewscomment', label: ' نظرات خبری' },
          { icon: profile, to: '/panel/panelpersoninfo', label: 'جزییات حساب' },
          { icon: secur, to: '/panel/security', label: 'امنیت' },
        ].map((item, idx) => (
          <div key={idx} className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 transition-all duration-300 cursor-pointer max-lg:text-sm ease-in-out hover:scale-110">
            <img className="w-1/10" src={item.icon} alt={item.label} />
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'font-bold  text-3xl' : 'text-gray-500'}>
              <span className="mr-5 text-gray-500 dark:text-white max-lg:text-sm ">{item.label}</span>
            </NavLink>
          </div>
        ))}

        <button onClick={logout} className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 transition-all duration-300 cursor-pointer max-lg:text-sm bg-transparent border-none hover:scale-110">
          <img className="w-1/10" src={exit} alt="خروج" />
          <span className="mr-5 text-gray-500 dark:text-white ">خروج</span>
        </button>
      </div>
    </div>
  );
}

export default SidePanel;