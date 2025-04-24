import React from 'react';
import telegram from "../../assets/landing/telegram.png";
import instagram from "../../assets/landing/instagram.png";
function Footer() {
  return (
    <div className="relative rounded-2xl bg-gray-100/50 flex gap-3 font-vazir font-bold text-gray-600 py- ">
      <div className="container  items-center mx-auto h-[382px]  flex gap-3 justify-between">
        <div className=" w-1/3 max-w-[494px] text-right  ">
          <div className=" bg-white p-10 rounded-[30px] shadow-md">
            <h3 className="mb-4 font-black text-[26px]">به ما بپیوندید</h3>
            <p className="text-gray-600 mb-4">
              در مورد آموزش پیشرفته در زمینه طراحی و برنامه‌نویسی وردپرس کار می‌کنیم که برای نقد در سایت وردپرس با ما تماس بگیرید.
            </p>
            <button className="bg-deep-blue font-bold text-lg text-white px-8 py-2 mt-2  rounded-md hover:bg-blue-600">ارسال رزومه</button>
          </div>
        </div>

        <div className="footer-links norder-amber-700  w-2/3 flex justify-end gap-38">
          <div className="links-section">
            <h4 className="text-4xl  font-semibold mb-4">لینک های مرتبط</h4>
            <ul className="text-gray-600 text-[20px] py-2 space-y-2">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
          <div className="links-section">
          <h4 className="text-4xl  font-semibold mb-4">لینک های مرتبط</h4>
          <ul className="text-gray-600 text-[20px] py-2 space-y-2">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
          <div className="links-section">
          <h4 className="text-4xl  font-semibold mb-4">لینک های مرتبط</h4>
          <ul className="text-gray-600 text-[20px] py-2 space-y-2">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='absolute bottom-5 right-38  flex justify-center gap-3 py-4'>
        <img className='w-10 h-8' src={telegram} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
}

export default Footer;