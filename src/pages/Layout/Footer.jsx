import instagram from "../../assets/landing/footer/instagram.png";
import facebook from "../../assets/landing/footer/facebook.png";
import whatsapp from "../../assets/landing/footer/whatsapp.png";
import twitter from "../../assets/landing/footer/twitter.png";
import youtube from "../../assets/landing/footer/youtube.png";
import googleplay from "../../assets/landing/footer/googleplay.png";
import appstore from "../../assets/landing/footer/appstore.png";
import { useState } from "react";
import up from "../../assets/landing/icons8-up-24.png";
import down from "../../assets/landing/icons8-down-24.png";
import { Link } from "react-router";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className=" font-iransans relative flex gap-3 rounded-2xl bg-gray-100/50 font-bold text-gray-600 transition-all duration-300 dark:text-gray-200 max-lg:overflow-auto max-sm:hidden">
     
      <div className="container mx-auto flex h-[382px] items-center justify-between gap-3  ">
        
        <div className="w-1/3 max-w-[494px] text-right max-lg:ml-2 max-md:hidden">
          <div className="dark rounded-[30px] bg-white p-10 shadow-md dark:text-gray-200">
            <h3 className="mb-4 text-[26px] font-black">به ما بپیوندید</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-200">
              در مورد آموزش پیشرفته در زمینه طراحی و برنامه‌نویسی وردپرس کار
              می‌کنیم که برای نقد در سایت وردپرس با ما تماس بگیرید.
            </p>
            <button className="bg-deep-blue mt-2 rounded-md px-8 py-2 text-lg font-bold text-white hover:bg-blue-600">
              ارسال رزومه
            </button>
          </div>
        </div>

        <div className="footer-links norder-amber-700 flex w-2/3 justify-end gap-38 max-lg:flex-col max-lg:gap-0 max-lg:text-right  max-md:w-full">
          <div className="links-section p-4 max-lg:border-b max-lg:border-gray-600">
            {/* Toggle Button (Only Visible in Tablet/Mobile Mode) */}

            <div className="max-lg:flex max-lg:flex-row-reverse">
              {/* Section Title (Always Clickable in Tablet/Mobile Mode) */}
              <a href='/sendyourthing'
                className="mb-4 flex cursor-pointer flex-row justify-end text-4xl max-lg:text-2xl font-semibold max-lg:flex-col text-blue-600"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                ارتباط با ما
              </a>
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen3(!isOpen3)}
                  className="mr-3 py-2 text-[20px] font-bold"
                >
                  <img src={isOpen3 ? up : down} alt="Toggle Icon" />
                </button>
              </div>
            </div>

            {/* Content Behavior Adjusted */}
            <ul
              className={`space-y-2 py-2 text-right text-[20px] text-gray-600 dark:text-gray-200 ${isOpen3 || window.innerWidth >= 1024 ? "block" : "hidden"} lg:block`}
            >
              <li>
                با ما در تماس باشید تا بتوانید هر چه سریعتر مشکلاتتان را حل کنید
              </li>
            </ul>

            <div
              className={`flex flex-row justify-end gap-10 hover:cursor-pointer ${isOpen3 || window.innerWidth >= 1024 ? "flex" : "hidden"} max-2xl:hidden`}
            >
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
            </div>

            <div
              className={`flex flex-row justify-start ${isOpen3 || window.innerWidth >= 1024 ? "flex" : "hidden"} lg:flex`}
            >
              <img
                className="h-20 w-60 hover:cursor-pointer"
                src={googleplay}
                alt=""
              />
              <img
                className="h-20 w-60 hover:cursor-pointer"
                src={appstore}
                alt=""
              />
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:border-b max-lg:border-gray-600 max-lg:pt-5 ">
            <div className="max-lg:flex max-lg:flex-row-reverse">
              <h4 className="mb-4 text-4xl font-semibold max-lg:mr-5 max-lg:text-2xl">
                {" "}
                شرکت ما{" "}
              </h4>

              {/* Accordion Trigger for max-lg mode */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen2(!isOpen2)}
                  className="mr-3 py-2 text-[20px] font-bold"
                >
                  <img src={isOpen2 ? up : down} alt="Toggle Icon" />
                </button>
              </div>
            </div>

            {/* Links List */}
            <ul
              className={`space-y-2 py-2 text-right text-[20px] text-gray-600 hover:cursor-pointer dark:text-gray-200 max-lg:pr-5 ${
                isOpen2 ? "block" : "hidden"
              } lg:block`}
            >
              <li> با ما تماس بگیرید </li>
              <li> معلم شوید </li>
              <li> وبلاگ </li>
              <li> مربی </li>
              <li> مناسبت ها </li>
            </ul>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:border-b max-lg:border-gray-600 max-lg:pt-5">
            <div className="max-lg:flex max-lg:flex-row-reverse">
              <h4 className="mb-4 text-4xl font-semibold max-lg:mr-5 max-lg:text-2xl">
                لینک ها
              </h4>

              {/* Accordion Trigger for max-lg mode */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mr-3 py-2 text-[20px] font-bold"
                >
                  <img src={isOpen ? up : down} alt="Toggle Icon" />
                </button>
              </div>
            </div>

            {/* Links List */}
            <ul
              className={`space-y-2  py-2 text-right text-[20px] text-gray-600 hover:cursor-pointer dark:text-gray-200 max-lg:pr-5 ${
                isOpen ? "block" : "hidden"
              } lg:block`}
            >
              <li>ارزش های ما</li>
              <li>هیت مشاورین ما</li>
              <li>شرکای ما</li>
              <li>شریک شدن</li>
              <li>future learn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
