import React, { useEffect, useState } from "react";
import {
  Getprofile,
  UpdateProfileInfo,
} from "../../core/services/api/userpanelapi/panelapis";
import { Link, useNavigate } from "react-router";

const Personalinfoedit = () => {
  const [fieldData, setFieldData] = useState({
    fName: "",
    lName: "",
    userAbout: "",
    linkdinProfile: "",
    telegramLink: "",
    receiveMessageEvent: false,
    homeAdderess: "",
    nationalCode: "",
    gender: "",
    birthDay: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await Getprofile();
        setFieldData({
          fName: res.fName || "",
          lName: res.lName || "",
          userAbout: res.userAbout || "",
          linkdinProfile: res.linkdinProfile || "",
          telegramLink: res.telegramLink || "",
          receiveMessageEvent: res.receiveMessageEvent || false,
          homeAdderess: res.homeAdderess || "",
          nationalCode: res.nationalCode || "",
          gender: res.gender?.toString() || "",
          birthDay: res.birthDay || "",
          latitude: res.latitude || "",
          longitude: res.longitude || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFieldData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("LName", fieldData.lName);
    formData.append("FName", fieldData.fName);
    formData.append("UserAbout", fieldData.userAbout);
    formData.append("LinkdinProfile", fieldData.linkdinProfile);
    formData.append("TelegramLink", fieldData.telegramLink);
    formData.append(
      "ReceiveMessageEvent",
      fieldData.receiveMessageEvent.toString(),
    );
    formData.append("HomeAdderess", fieldData.homeAdderess);
    formData.append("NationalCode", fieldData.nationalCode);
    formData.append("Gender", fieldData.gender);
    formData.append("BirthDay", fieldData.birthDay);
    formData.append("Latitude", fieldData.latitude);
    formData.append("Longitude", fieldData.longitude);
    try {
      await UpdateProfileInfo(formData);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
      console.log("fromfat is submited", formData);
    }
  };

  return (
    <div className="mx-auto mt-5 mb-2 max-w-4xl space-y-6 p-4">
      <div
        dir="rtl"
        className="font-vazir rounded-2xl border border-gray-400/50 bg-white p-6 shadow-[2px_2px_10px_1px_gray] dark:border-2 dark:border-gray-400/50 dark:bg-gray-700"
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              نام
            </label>
            <input
              name="fName"
              value={fieldData.fName}
              onChange={handleChange}
              placeholder="نام شما"
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              نام خانوادگی
            </label>
            <input
              name="lName"
              value={fieldData.lName}
              onChange={handleChange}
              placeholder="نام خانوادگی شما"
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              درباره من
            </label>
            <textarea
              name="userAbout"
              value={fieldData.userAbout}
              onChange={handleChange}
              placeholder="چند کلمه درباره خودتان بنویسید..."
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              لینکدین
            </label>
            <input
              name="linkdinProfile"
              value={fieldData.linkdinProfile}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourname"
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              تلگرام
            </label>
            <input
              name="telegramLink"
              value={fieldData.telegramLink}
              onChange={handleChange}
              placeholder="@yourusername"
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              آدرس منزل
            </label>
            <input
              name="homeAdderess"
              value={fieldData.homeAdderess}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              کد ملی
            </label>
            <input
              name="nationalCode"
              value={fieldData.nationalCode}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              جنسیت
            </label>
            <select
              name="gender"
              value={fieldData.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            >
              <option value="">انتخاب کنید</option>
              <option value="true">مرد</option>
              <option value="false">زن</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              تاریخ تولد
            </label>
            <input
              type="date"
              name="birthDay"
              value={fieldData.birthDay}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              عرض جغرافیایی
            </label>
            <input
              name="latitude"
              value={fieldData.latitude}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
              طول جغرافیایی
            </label>
            <input
              name="longitude"
              value={fieldData.longitude}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 p-3 text-gray-700 shadow-lg dark:border-gray-400/50 dark:bg-gray-800 dark:text-white"
            />
          </div> */}

          <div className="mt-4 flex justify-center md:col-span-2 gap-5">
            <Link className="bg-deep-blue rounded-xl text-center text-white font-bold font-iransans w-100 flex items-center justify-center hover:bg-blue-800 disabled:opacity-50" to="/panel/panelpersoninfo"> صفحه قبل</Link>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 rounded-xl bg-[#436E8E] p-3 text-white shadow-lg hover:bg-blue-800 disabled:opacity-50 font-bold"
            >
              {loading ? "در حال ارسال..." : "ثبت تغییرات"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Personalinfoedit };
