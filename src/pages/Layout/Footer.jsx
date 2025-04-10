import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-100 flex gap-3  text-black py-8  ">
      <div className="container mx-auto h-[382px]  flex gap-3 justify-between">
        <div className=" w-1/3 max-w-[494px]  ">
          <div className=" bg-white p-6 rounded-[30px] shadow-md">
            <h3 className="text-xl font-semibold mb-4">به ما بپیوندید</h3>
            <p className="text-gray-600 mb-4">
              در مورد آموزش پیشرفته در زمینه طراحی و برنامه‌نویسی وردپرس کار می‌کنیم که برای نقد در سایت وردپرس با ما تماس بگیرید.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">ارسال پیام</button>
          </div>
        </div>

        <div className="footer-links norder-amber-700 border-2 w-2/3 flex justify-end gap-38">
          <div className="links-section">
            <h4 className="font-semibold mb-4">لینک های مرتبط</h4>
            <ul className="text-gray-600">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
          <div className="links-section">
            <h4 className="font-semibold mb-4">لینک های مرتبط</h4>
            <ul className="text-gray-600">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
          <div className="links-section">
            <h4 className="font-semibold mb-4">لینک های مرتبط</h4>
            <ul className="text-gray-600">
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
              <li>لینک های مرتبط</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;