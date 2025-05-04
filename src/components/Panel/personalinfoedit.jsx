import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateProfileInfo } from '../../core/services/api/userpanelapi/panelapis';

// کامپوننت برای ویرایش اطلاعات شخصی
const Personalinfoedit = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    userAbout: '',
    linkdinProfile: '',
    telegramLink: '',
    receiveMessageEvent: false,
    homeAdderess: '',
    nationalCode: '',
    gender: true,
    birthDay: '', // باید به فرمت DateTime ارسال شود
    latitude: '',
    longitude: ''
  });

  // مدیریت تغییرات در ورودی‌ها
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // ارسال اطلاعات فرم
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // تبدیل تاریخ تولد به فرمت DateTime
    const formattedBirthDay = new Date(formData.birthDay).toISOString(); // تبدیل به فرمت DateTime

    const finalData = {
      ...formData,
      gender: formData.gender === 'true' || formData.gender === true,
      birthDay: formattedBirthDay // فرمت تاریخ تولد تغییر یافته
    };

    try {
      const response = await UpdateProfileInfo(finalData);
      console.log('Profile updated successfully:', response);
      navigate('/profile'); // بعد از موفقیت به صفحه پروفایل برو
    } catch (error) {
      console.log('Error updating profile:', error.response?.data || error);
    }
  };

  return (
    <div className="flex flex-row-reverse flex-wrap w-full h-auto justify-center max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto">
      <div className="bg-white w-10/11 rounded-2xl shadow-lg p-6 dark:bg-gray-700">
        <form onSubmit={handleSubmit} className="w-9/10 m-auto mt-10 flex flex-wrap justify-between gap-4">

          {/* فیلدها */}
          <FormField label="نام" name="fName" value={formData.fName} onChange={handleInputChange} />
          <FormField label="نام خانوادگی" name="lName" value={formData.lName} onChange={handleInputChange} />
          <FormTextArea label="درباره من" name="userAbout" value={formData.userAbout} onChange={handleInputChange} />
          <FormField label="لینکدین" name="linkdinProfile" value={formData.linkdinProfile} onChange={handleInputChange} />
          <FormField label="تلگرام" name="telegramLink" value={formData.telegramLink} onChange={handleInputChange} />
          <FormField label="آدرس منزل" name="homeAdderess" value={formData.homeAdderess} onChange={handleInputChange} />
          <FormField label="کد ملی" name="nationalCode" value={formData.nationalCode} onChange={handleInputChange} />

          {/* انتخاب جنسیت */}
          <div className="w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">جنسیت</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-xl text-gray-700 dark:border dark:border-white"
            >
              <option value={true}>مرد</option>
              <option value={false}>زن</option>
            </select>
          </div>

          {/* فیلد تاریخ تولد */}
          <FormField label="تاریخ تولد" name="birthDay" type="date" value={formData.birthDay} onChange={handleInputChange} />
          
          {/* فیلدهای جغرافیایی */}
          <FormField label="عرض جغرافیایی" name="latitude" value={formData.latitude} onChange={handleInputChange} />
          <FormField label="طول جغرافیایی" name="longitude" value={formData.longitude} onChange={handleInputChange} />

          {/* دکمه ارسال */}
          <div className="w-full flex justify-center mt-6">
            <button type="submit" className="w-1/2 p-3 bg-blue-500 text-white rounded-xl shadow-lg">
              ارسال
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// کامپوننت برای فیلدهای ورودی
const FormField = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4">
    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-xl text-gray-700 dark:border dark:border-white"
    />
  </div>
);

// کامپوننت برای فیلدهای متن
const FormTextArea = ({ label, name, value, onChange }) => (
  <div className="w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4">
    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-xl text-gray-700 dark:border dark:border-white"
    />
  </div>
);

export { Personalinfoedit };
