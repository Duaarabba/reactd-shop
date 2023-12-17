import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {ForgetPassScheam} from '../validation/validate.js'
import {  toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../context/User';


export default function ForgetPass() {
  let {setUserToken}= useContext(UserContext);
  const navigate = useNavigate();
  const initialValues={
        email:'',
       
       }

     const onSubmit= async users=>{
     const {data}= await axios.patch(`https://ecommerce-node4.vercel.app/auth/sendcode`,users);
      console.log(data);
      if(data.message=='success'){
        localStorage.setItem('userToken',data.token);
        setUserToken(data.token);
        navigate('/reset');
        toast.success('Check Your Email', {
          position: "top-center",
             autoClose: 5000,
          hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
              progress: undefined,
              theme: "light",
             });
          }
      
      
     };
      
  const formik= useFormik({
    initialValues,
    onSubmit,
    validationSchema:ForgetPassScheam,
  })
 
 
  const inputs=[
    {
      id:'email',
      type:'email',
      title:'User Email',
      name:'email',
      value:formik.values.email

    },
   
    
];
const renderInputs = inputs.map((ele,index)=>
    <Input 
    type={ele.type}
     id={ele.id} 
     title={ele.title} 
     value={ele.value} 
     name={ele.name}
     key={index}
     errors={formik.errors}
     onChange={ formik.handleChange}
     onBlur={formik.handleBlur}
     touched={formik.touched}
       />)
return (
    
    <div className='container'>
       
    <div className='d-flex justify-content-center '>
    <div>
    <h2 className=' text-center my-5 text-Color'>Reset Password</h2>
    <h5 className='text-Color'>Please enter your email address to reset your password</h5> 
    </div>
    </div>
    

   
    
     <form onSubmit={formik.handleSubmit} className='pt-5' >
    
      { renderInputs}
      
      
     <div className='d-flex justify-content-center mt-4'>
    
     <button type="submit"  className="  px-5 py-2 rounded-2 border text-white bg-mainColor">Send Code</button>

     
     </div>
     </form>
    </div>
     
   
  )
}



