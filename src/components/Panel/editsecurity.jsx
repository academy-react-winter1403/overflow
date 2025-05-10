import { useState } from "react";
import { updatesecurityinfo } from "../../core/services/api/userpanelapi/panelapis";

const Updatesecurity = () => {
    const [formData, setFormData] = useState({
        recoveryEmail: "",
        twoStepAuth: "",
        baseUrl: "http://localhost:5173/panel/security"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // حتما دو مرحله‌ای رو به boolean تبدیل می‌کنیم
        const payload = {
            ...formData,
            twoStepAuth: formData.twoStepAuth === "true" ? true : false
        };

        console.log(payload);
        try {
            await updatesecurityinfo(payload);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-5 mb-2 space-y-6 p-4">
            <div
                dir="rtl"
                className="bg-white dark:bg-gray-700 font-vazir rounded-2xl shadow-lg p-6 border border-gray-400/50 dark:border-gray-400/50"
            >
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">ایمیل پشتیبان</label>
                        <input
                            name="recoveryEmail"
                            value={formData.recoveryEmail}
                            onChange={(e) => setFormData({ ...formData, recoveryEmail: e.target.value })}
                            placeholder="ایمیل شما"
                            className="w-full p-3 border border-gray-700 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">تایید دو مرحله ای</label>
                        <select
                            name="twoStepAuth"
                            value={formData.twoStepAuth}
                            onChange={(e) => setFormData({ ...formData, twoStepAuth: e.target.value })}
                            className="w-full p-3 border border-gray-700 shadow-lg rounded-xl text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-400/50"
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="true">فعال</option>
                            <option value="false">غیرفعال</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="w-1/2 p-3 bg-[#436E8E] hover:bg-blue-800 text-white rounded-xl shadow-lg disabled:opacity-50"
                        >
                            تایید
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { Updatesecurity };
