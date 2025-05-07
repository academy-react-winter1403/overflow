    import React, { useEffect, useState } from 'react';
    import { Getprofile, UpdateProfileInfo } from '../../core/services/api/userpanelapi/panelapis';
    import { useNavigate } from 'react-router';

    const Personalinfoedit = () => {
        const [formData, setFormData] = useState({
            fName: '', lName: '', userAbout: '', linkdinProfile: '', telegramLink: '',
            receiveMessageEvent: false, homeAdderess: '', nationalCode: '', gender: '',
            birthDay: '', latitude: '', longitude: ''
        });
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            (async () => {
                try {
                    const res = await Getprofile();
                    setFormData({
                        fName: res.fName || '',
                        lName: res.lName || '',
                        userAbout: res.userAbout || '',
                        linkdinProfile: res.linkdinProfile || '',
                        telegramLink: res.telegramLink || '',
                        receiveMessageEvent: res.receiveMessageEvent || false,
                        homeAdderess: res.homeAdderess || '',
                        nationalCode: res.nationalCode || '',
                        gender: res.gender?.toString() || '',
                        birthDay: res.birthDay || '',
                        latitude: res.latitude || '',
                        longitude: res.longitude || ''
                    });
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            })();
        }, []);

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            try {
                await UpdateProfileInfo({ ...formData, gender: formData.gender === 'true' });
                navigate('/profile');
            } catch (error) {
                console.error('Error updating profile:', error);
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="max-w-4xl mx-auto mt-5 mb-2 space-y-6 p-4 ">
                <div dir='rtl' className="bg-white dark:bg-gray-700 font-vazir rounded-2xl  shadow-[2px_2px_10px_1px_gray] p-6 border border-gray-400/50 dark:border-gray-400/50 dark:border-2 ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">نام</label>
                            <input
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                placeholder="نام شما"
                                className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">نام خانوادگی</label>
                            <input
                                name="lName"
                                value={formData.lName}
                                onChange={handleChange}
                                placeholder="نام خانوادگی شما"
                                className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                            />
                        </div>


                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">درباره من</label>
                            <textarea
                                name="userAbout"
                                value={formData.userAbout}
                                onChange={handleChange}
                                placeholder="چند کلمه درباره خودتان بنویسید..."
                                className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">لینکدین</label>
                            <input
                                name="linkdinProfile"
                                value={formData.linkdinProfile}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/yourname"
                                className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">تلگرام</label>
                            <input
                                name="telegramLink"
                                value={formData.telegramLink}
                                onChange={handleChange}
                                placeholder="@yourusername"
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">آدرس منزل</label>
                            <input
                                name="homeAdderess"
                                value={formData.homeAdderess}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">کد ملی</label>
                            <input
                                name="nationalCode"
                                value={formData.nationalCode}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">جنسیت</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            >
                                <option value="">انتخاب کنید</option>
                                <option value="true">مرد</option>
                                <option value="false">زن</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">تاریخ تولد</label>
                            <input
                                type="date"
                                name="birthDay"
                                value={formData.birthDay}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">عرض جغرافیایی</label>
                            <input
                                name="latitude"
                                value={formData.latitude}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">طول جغرافیایی</label>
                            <input
                                name="longitude"
                                value={formData.longitude}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white  dark:border-gray-400/50"
                            />
                        </div>

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
