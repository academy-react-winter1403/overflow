import { Formik, Form, Field, ErrorMessage } from 'formik';  

const Register = () => {


  
const handleSubmit = (values) => {  
    console.log(values);  
  }; 
  
  return (
<div className='Registerholder'>  
        <div className='image'><img src="../picture/Image 6.png" alt="" /></div>  

        <div className='Registerinputs'>  
          <div className='academylogo'><img src="../picture/ac-Logo.png" alt="" /></div>  
          <div className='academyname'>آکادمی سپهر</div>  

          <div className='singupholder'>  
            <div className='singup'>ثبت نام</div>  
            <div className='account'>حساب کاربری دارید؟</div>  
            <a className='singin'>وارد شوید</a>  
          </div>  

          <Formik  
            initialValues={{ name: '', phone: '', password: '' }}  
            onSubmit={handleSubmit}  
          >  
            {() => (  
              <Form className='inputholder'>  
                <Field type="text" name="name" placeholder='نام' />  
                <ErrorMessage name="name" component="div" className="error" />  
                
                <Field type="text" name="phone" placeholder='شماره تماس' />  
                <ErrorMessage name="phone" component="div" className="error" />  
                
                <Field type="password" name="password" placeholder='رمز عبور' />  
                <ErrorMessage name="password" component="div" className="error" />  
                
                <button type="submit" className='inputs'>ادامه</button>  
              </Form>  
            )}  
          </Formik>  

          <div className='rules'>قوانین و شرایط</div>  
          
        </div>  
      </div>  
  )
}

export  {Register}

