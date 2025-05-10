import { useEffect, useState } from "react"
import { Getsecurityinfo } from "../../core/services/api/userpanelapi/panelapis"
import { Link } from "react-router"

const Security = () => {
  const [securityData, setSecurityData] = useState(null)


  useEffect(() => {
    const fetchSecurityInfo = async () => {
      try {
        const response = await Getsecurityinfo()

        setSecurityData(response)
      } catch (error) {
        console.error('Error fetching security info:', error)
      }
    }

    fetchSecurityInfo()
  }, [])

  const {
    baseAddress = 'N/A',
    country = 'N/A',
    recoveryEmail = 'N/A',
    twoFactorEnabled = false,
    nationalIDVerified = false
  } = securityData || {}

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center md:items-start pt-6 space-y-8 md:space-y-0 md:space-x-10 bg-gray-50 dark:bg-gray-800 min-h-[76vh] font-kalameh rounded-2xl">
      {/* Labels */}
      <div className="flex flex-col w-full md:w-1/2 gap-4 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200  ml-5  max-md:w-8/10">
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          آدرس پایه
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          کشور
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          ایمیل بازیابی
        </div>        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          تصویب تصویر ملی
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          احراز هویت دو مرحله ای
        </div>

      </div>

      {/* Data Values */}
      <div className="flex flex-col w-full md:w-1/2 gap-4 text-lg md:text-xl items-center ml-5 max-md:w-8/10">
        <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {baseAddress}
        </div>
        <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {country}
        </div>
        <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {recoveryEmail}
        </div>    <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {nationalIDVerified ? 'تایید شد' : 'تایید نشده'}
        </div>
        <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {twoFactorEnabled ? 'فعال' : 'غیرفعال'}
        </div>

        <Link to={"/panel/upadatesecurity"}>
          {twoFactorEnabled ? "" : <div className="w-full p-4 bg-deep-blue text-white   dark:bg-gray-900 rounded-xl shadow flex items-center justify-center hover:bg-blue-800 dark:hover:bg-gray-700 transition"> فعال سازی</div>}
        </Link>
      </div>
    </div>
  )
}

export { Security }