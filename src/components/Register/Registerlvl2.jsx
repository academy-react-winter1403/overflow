import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'

const Registerlvl2 = () => {

    const handleSubmit = (values) => {  
        console.log(values);  
    }

  return (
<div className='Registerholder'>  
        <div className='image'><img src="../picture/Image 6.png" alt="" /></div>  

        <div className='Registerinputs'>  
          <div className='academylogo'><img src="../picture/ac-Logo.png" alt="" /></div>  
          <div className='academyname'>آکادمی سپهر</div>  

          <div className='singupholder'>  
            <div className='singup'>ثبت نام</div>  
            <div className='insertcode'>کد ارسال شده را وارد کنید</div>    
          </div>  

          <Formik  
            initialValues={{ name: '', phone: '', password: '' }}  
            onSubmit={handleSubmit}  
          >  
            {() => (  
              <Form className='inputholder2'>  
                <Field type="text" name="number"  />  
                <ErrorMessage name="name" component="div" className="error" />  
                
                <Field type="text" name="number"  />  
                <ErrorMessage name="phone" component="div" className="error" />  
                
                <Field type="password" name="number" />  
                <ErrorMessage name="password" component="div" className="error" />
                
                <Field type="password" name="number"  />  
                <ErrorMessage name="password" component="div" className="error" />  
                
                <button type="submit" className='inputs2'>تایید و ثبت نام</button>  
              </Form>  
            )}  
          </Formik>  

          <div className='rules2'>  
            <label>  قوانین را مطالعه کرده و با شرایط موافقم <input type="checkbox" required />   
            </label>  
          </div>  
          
        </div>  
      </div> 
  )
}


export  {Registerlvl2}