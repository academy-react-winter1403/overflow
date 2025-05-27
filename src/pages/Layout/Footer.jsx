import instagram from "../../assets/landing/footer/instagram.png";
import facebook from "../../assets/landing/footer/facebook.png";
import whatsapp from "../../assets/landing/footer/whatsapp.png";
import twitter from "../../assets/landing/footer/twitter.png";
import youtube from "../../assets/landing/footer/youtube.png";
import googleplay from "../../assets/landing/footer/googleplay.png";
import appstore from "../../assets/landing/footer/appstore.png";


function Footer() {
  return (
    <div className="relative rounded-2xl dark:text-gray-200 bg-gray-100/50 flex gap-3 font-vazir font-bold text-gray-600 py- ">
      <div className="container  items-center mx-auto h-[382px]  flex gap-3 justify-between">
        <div className=" w-1/3 max-w-[494px] text-right  ">
          <div className=" bg-white dark:text-gray-200 dark p-10 rounded-[30px] shadow-md">
            <h3 className="mb-4 font-black text-[26px]">به ما بپیوندید</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              در مورد آموزش پیشرفته در زمینه طراحی و برنامه‌نویسی وردپرس کار می‌کنیم که برای نقد در سایت وردپرس با ما تماس بگیرید.
            </p>
            <button className="bg-deep-blue font-bold text-lg  text-white px-8 py-2 mt-2  rounded-md hover:bg-blue-600">ارسال رزومه</button>
          </div>
        </div>

        <div className="footer-links norder-amber-700  w-2/3 flex justify-end gap-38">
          <div className="links-section  flex flex-col gap-5 ">
            <h4 className="text-4xl  font-semibold mb-4 flex flex-row justify-end "> در تماس باشید </h4>
            <ul className="text-gray-600 dark:text-gray-200 text-[20px] py-2 space-y-2 ">
              <li className='text-right'> با ما در تماس باشید تا بتوانید هر چه سریعتر مشکلاتتان را حل کنید  </li>
            </ul>
              <div className='flex flex-row gap-10 justify-end hover:cursor-pointer '>
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={whatsapp} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
              </div>
              <div className=" flex flex-row justify-start ">
                <img className="w-60 h-20 hover:cursor-pointer " src={googleplay} alt="" />
                <img className="w-60 h-20 hover:cursor-pointer " src={appstore} alt="" />
              </div>
          </div>
          <div className="links-section">
          <h4 className="text-4xl  font-semibold mb-4"> شرکت ما </h4>
          <ul className="text-gray-600 dark:text-gray-200 text-[20px] py-2 space-y-2 text-right">
              <li> با ما تماس بگیرید </li>
              <li> معلم شوید </li>
              <li> وبلاگ </li>
              <li> مربی </li>
              <li> مناسبت ها </li>
            </ul>
          </div>
          <div className="links-section">
          <h4 className="text-4xl  font-semibold mb-4">لینک ها </h4>
          <ul className="text-gray-600 dark:text-gray-200 text-[20px] py-2 space-y-2 hover:cursor-pointer text-right">
              <li> ارزش های ما </li>
              <li> هیت مشاورین ما </li>
              <li> شرکای ما </li>
              <li> شریک شدن </li>
              <li>  future learn   </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;