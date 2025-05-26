import leftimg from '../../assets/ep/Path 3.png'
import Locationicon from '../../assets/ep/Image 2.png'
import map from '../../assets/ep/map.png'
import line from '../../assets/ep/Path 22.png'
import { Field, Formik } from 'formik'
import { Form } from 'react-router'
import Footer from '../../pages/Layout/Footer'


const Idk = () => {
  return (
    <div className=" flex flex-col w-10/10 h-150 relative  mt-20 ">

        <img className=' absolute left-[-450px]' src={leftimg}/>
        <img className=' absolute left-380 top-100' src={Locationicon}/>
        <img className=' absolute left-348 top-130' src={line}/>

        <div className=' flex flex-col w-5/10 h-150 m-auto justify-center items-center z-20 '>

            
            <div className='text-deep-blue text-4xl font-bold h-15 w-5/10 ml-110 mb-5'>انتقادها و پیشنهادات</div>

            <div className='flex flex-row w-8/10 h-100 rounded-4xl bg-white '>
                <Formik initialValues={{gmail:""}}>

                    <Form className="flex flex-col w-10/10 gap-5 rounded-4xl bg-white pt-15 ">

                        <Field 
                        type="text"
                        name="gmail"
                        placeholder=" ایمل"
                        className=" w-8/10 h-15 rounded-3xl text-right pr-5 ml-[-50px] bg-white outline-0 border-2 border-gray-300 "
                        />     
                        
                        <Field 
                        type="text"
                        name="text"
                        placeholder=" متن پیام"
                        className=" w-8/10 h-50 rounded-3xl text-right pr-5 bg-white ml-50 outline-0 border-2 border-gray-300"
                        />

                    </Form>
                </Formik>
            </div>

            <button className='bg-deep-blue w-1/10 rounded-3xl h-13 mt-[-50px] absolute top-127 text-white font-bold'>ارسال پیام</button>

        </div>

        <div className='w-7/10 gap-10  m-auto mt-50 z-20 flex flex-col'>
            <p className='text-deep-blue text-4xl font-bold m-auto text-right'>یه سر بیا پیشمون</p>
            <img src={map} />
            <span className='text-center  mb-150 text-deep-blue text-2xl font-bold'>ما در شهرستان ساری بلوار خزر و پژوهشگاه دکتر بحرالعلومی منتظر حضور گرم شما دوستان عزیزمون هستیم</span>
        </div>

        <Footer />
    </div>
  )
}

export  {Idk}