import React, { useEffect, useState, useCallback } from 'react';
import { Getprofile, UpdateProfileInfo } from '../../core/services/api/userpanelapi/panelapis';
import { useNavigate } from 'react-router';

const Personalinfoedit = () => {
    const [formData, setFormData] = useState({
        FName: '',
        LName: '',
        UserAbout: '',
        LinkdinProfile: '',
        TelegramLink: '',
        ReceiveMessageEvent: false,
        HomeAdderess: '',
        NationalCode: '',
        Gender: '',
        BirthDay: '',
        Latitude: '',
        Longitude: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch the profile data on mount
    useEffect(() => {
        (async () => {
            try {
                const res = await Getprofile();
                setFormData({
                    FName: res.FName || '',
                    LName: res.LName || '',
                    UserAbout: res.UserAbout || '',
                    LinkdinProfile: res.LinkdinProfile || '',
                    TelegramLink: res.TelegramLink || '',
                    ReceiveMessageEvent: res.ReceiveMessageEvent ?? false,
                    HomeAdderess: res.HomeAdderess || '',
                    NationalCode: res.NationalCode || '',
                    Gender: res.Gender !== undefined ? res.Gender.toString() : '',
                    BirthDay: res.BirthDay ? res.BirthDay.split('T')[0] : '',
                    Latitude: res.Latitude?.toString() || '',
                    Longitude: res.Longitude?.toString() || ''
                });
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        })();
    }, []);

    // Handle form field changes
    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }, []);

    // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   const payload = {
    ...formData,
    Gender: formData.Gender === 'true' ? true : formData.Gender === 'false' ? false : null,
    BirthDay: formData.BirthDay ? `${formData.BirthDay}T00:00:00` : '1753-01-01T00:00:00',
    Latitude: parseFloat(formData.Latitude) || 0,
    Longitude: parseFloat(formData.Longitude) || 0,
    ReceiveMessageEvent: !!formData.ReceiveMessageEvent
};


    console.log('PAYLOAD SENDING:', payload);

    try {
        await UpdateProfileInfo(payload);
        navigate('/profile');
    } catch (error) {
        console.error('Error updating profile:', error.response?.data || error);
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="max-w-4xl mx-auto mt-5 mb-2 space-y-6 p-4 ">
            <div
                dir="rtl"
                className="bg-white dark:bg-gray-700 font-vazir rounded-2xl shadow-lg p-6 border border-gray-400/50 dark:border-gray-400/50"
            >
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* نام */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">نام</label>
                        <input
                            name="FName"
                            value={formData.FName}
                            onChange={handleChange}
                            placeholder="نام شما"
                            className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* نام خانوادگی */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">نام خانوادگی</label>
                        <input
                            name="LName"
                            value={formData.LName}
                            onChange={handleChange}
                            placeholder="نام خانوادگی شما"
                            className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* درباره من */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">درباره من</label>
                        <textarea
                            name="UserAbout"
                            value={formData.UserAbout}
                            onChange={handleChange}
                            placeholder="چند کلمه درباره خودتان بنویسید..."
                            className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* لینکدین */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">لینکدین</label>
                        <input
                            name="LinkdinProfile"
                            value={formData.LinkdinProfile}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/yourname"
                            className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* تلگرام */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">تلگرام</label>
                        <input
                            name="TelegramLink"
                            value={formData.TelegramLink}
                            onChange={handleChange}
                            placeholder="@yourusername"
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* آدرس منزل */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">آدرس منزل</label>
                        <input
                            name="HomeAdderess"
                            value={formData.HomeAdderess}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* کد ملی */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">کد ملی</label>
                        <input
                            name="NationalCode"
                            value={formData.NationalCode}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* جنسیت */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">جنسیت</label>
                        <select
                            name="Gender"
                            value={formData.Gender}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="true">مرد</option>
                            <option value="false">زن</option>
                        </select>
                    </div>

                    {/* تاریخ تولد */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">تاریخ تولد</label>
                        <input
                            type="date"
                            name="BirthDay"
                            value={formData.BirthDay}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* عرض جغرافیایی */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">عرض جغرافیایی</label>
                        <input
                            name="Latitude"
                            value={formData.Latitude}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* طول جغرافیایی */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">طول جغرافیایی</label>
                        <input
                            name="Longitude"
                            value={formData.Longitude}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    {/* ارسال */}
                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-1/2 p-3 bg-[#436E8E] hover:bg-blue-800 text-white rounded-xl shadow-lg disabled:opacity-50"
                        >
                            {loading ? 'در حال ارسال...' : 'ثبت تغییرات'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { Personalinfoedit };
