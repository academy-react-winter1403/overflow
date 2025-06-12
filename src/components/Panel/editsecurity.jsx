import { useState } from "react";
import { updatesecurityinfo } from "../../core/services/api/userpanelapi/panelapis";

const Updatesecurity = () => {
  const [formData, setFormData] = useState({
    recoveryEmail: "",
    twoStepAuth: true,
    baseUrl: "http://localhost:5173/panel/security",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      twoStepAuth: formData.twoStepAuth === "true" ? true : false,
    };

    console.log(payload);
    try {
      await updatesecurityinfo(payload);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="mx-auto mt-5 mb-2 max-w-4xl space-y-6 p-4">
      <div
        dir="rtl"
        className="font-vazir rounded-2xl border border-gray-400/50 bg-white p-6 shadow-lg dark:border-gray-400/50 dark:bg-gray-700"
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              ایمیل پشتیبان
            </label>
            <input
              name="recoveryEmail"
              value={formData.recoveryEmail}
              onChange={(e) =>
                setFormData({ ...formData, recoveryEmail: e.target.value })
              }
              placeholder="ایمیل شما"
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              تایید دو مرحله ای
            </label>
            <select
              name="twoStepAuth"
              value={formData.twoStepAuth}
              onChange={(e) =>
                setFormData({ ...formData, twoStepAuth: e.target.value })
              }
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            >
              <option value="">انتخاب کنید</option>
              <option value="true">فعال</option>
              <option value="false">غیرفعال</option>
            </select>
          </div>

          <div className="mt-4 flex justify-center md:col-span-2">
            <button
              type="submit"
              className="w-1/2 rounded-xl bg-[#436E8E] p-3 text-white shadow-lg hover:bg-blue-800 disabled:opacity-50"
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
