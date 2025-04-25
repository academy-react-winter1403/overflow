import React, { useEffect, useState } from 'react';
import logo from '../../assets/userpanel/Logo.png';
import home from '../../assets/userpanel/home.png';
import courses from '../../assets/userpanel/Path 29.png';
import ticket from '../../assets/userpanel/Path 30.png';
import profileIcon from '../../assets/userpanel/Path 31.png';
import exit from '../../assets/userpanel/Path 32.png';
import { Getprofile, UpdateProfileInfo } from '../../core/services/api/userpanelapi/panelapis'; // فرض می‌کنیم این API برای آپدیت هست
import { useNavigate } from 'react-router';

const Personalinfoedit = () => {
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        userAbout: '',
        linkdinProfile: '',
        telegramLink: '',
        receiveMessageEvent: false,
        homeAdderess: '',
        nationalCode: '',
        gender: false,
        birthDay: '',
        latitude: '',
        longitude: ''
    });
    
    const navigate = useNavigate();


    const profileInfo = async () => {
        try {
            const response = await Getprofile();
            setProfile(response);
            setFormData({
                fName: response.fName || '',
                lName: response.lName || '',
                userAbout: response.userAbout || '',
                linkdinProfile: response.linkdinProfile || '',
                telegramLink: response.telegramLink || '',
                receiveMessageEvent: response.receiveMessageEvent || false,
                homeAdderess: response.homeAdderess || '',
                nationalCode: response.nationalCode || '',
                gender: response.gender || false,
                birthDay: response.birthDay || '',
                latitude: response.latitude || '',
                longitude: response.longitude || ''
            });
        } catch (error) {
            console.log('Error from profileInfo:', error);
        }
    };

    useEffect(() => {
        profileInfo();
    }, []);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UpdateProfileInfo(formData);
            console.log("Profile updated successfully:", response);

            navigate('/profile');
        } catch (error) {
            console.log("Error updating profile:", error);
        }
    };

    return (
        <div className="flex flex-row-reverse flex-wrap w-9/10 ml-20 font-kalameh">

            <div className="w-3/11 bg-white h-180 rounded-2xl max-sm:w-3/10">
                <div className='flex items-end flex-row-reverse w-full h-20 pr-9'>
                    <img className='w-2/10' src={logo} alt="Logo" />
                    <span className='text-deep-blue text-2xl font-bold mr-5 max-sm:text-xs max-sm:font-bold'>
                        آکادمی سپهر
                    </span>
                </div>
                <div className='flex flex-col items-end w-full h-100 mt-10'>
                    {[
                        { icon: home, label: 'پیشخوان' },
                        { icon: courses, label: 'دوره های من' },
                        { icon: ticket, label: 'تیکت ها' },
                        { icon: profileIcon, label: 'جزییات حساب' },
                        { icon: exit, label: 'خروج' }
                    ].map(({ icon, label }) => (
                        <div className='w-full flex items-end flex-row-reverse pr-10 mt-5' key={label}>
                            <img className='w-1/10' src={icon} alt={label} />
                            <span className='mr-5 text-gray-500'>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row-reverse flex-wrap w-7/10'>
                <div className='flex flex-row-reverse flex-wrap w-full h-auto justify-center max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>
                    <div className='bg-white w-10/11 rounded-2xl shadow-lg p-6'>
                        <form onSubmit={handleSubmit} className='w-9/10 m-auto mt-10 flex flex-wrap justify-between gap-4'>
                            

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>نام</label>
                                <input 
                                    type="text" 
                                    name="fName" 
                                    value={formData.fName} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>
                            
                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>نام خانوادگی</label>
                                <input 
                                    type="text" 
                                    name="lName" 
                                    value={formData.lName} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>درباره من</label>
                                <textarea 
                                    name="userAbout" 
                                    value={formData.userAbout} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>لینکدین</label>
                                <input 
                                    type="text" 
                                    name="linkdinProfile" 
                                    value={formData.linkdinProfile} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>تلگرام</label>
                                <input 
                                    type="text" 
                                    name="telegramLink" 
                                    value={formData.telegramLink} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>


                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>آدرس منزل</label>
                                <input 
                                    type="text" 
                                    name="homeAdderess" 
                                    value={formData.homeAdderess} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>کد ملی</label>
                                <input 
                                    type="text" 
                                    name="nationalCode" 
                                    value={formData.nationalCode} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>جنسیت</label>
                                <select 
                                    name="gender" 
                                    value={formData.gender} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                >
                                    <option value={true}>مرد</option>
                                    <option value={false}>زن</option>
                                </select>
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>تاریخ تولد</label>
                                <input 
                                    type="date" 
                                    name="birthDay" 
                                    value={formData.birthDay} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>عرض جغرافیایی</label>
                                <input 
                                    type="text" 
                                    name="latitude" 
                                    value={formData.latitude} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>طول جغرافیایی</label>
                                <input 
                                    type="text" 
                                    name="longitude" 
                                    value={formData.longitude} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border rounded-xl text-gray-700"
                                />
                            </div>

                            <div className='w-full flex justify-center mt-6'>
                                <button type="submit" className="w-1/2 p-3 bg-blue-500 text-white rounded-xl shadow-lg">
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Personalinfoedit };
