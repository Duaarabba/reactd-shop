import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {ResetPassScheam} from '../validation/validate.js'
import {  toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../context/User';


export default function Reset() {
  let {setUserToken}= useContext(UserContext);
  const navigate = useNavigate();
  const initialValues={
        email:'',
        password:'',
        code:'',
       }

     const onSubmit= async users=>{
     const {data}= await axios.patch(`https://ecommerce-node4.vercel.app/auth/forgotPassword`,users);
      //console.log(data);
      if(data.message=='success'){
        localStorage.setItem('userToken',data.token);
        setUserToken(data.token);
        navigate('/login');
        toast.success('Your Password is Change', {
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
    validationSchema:ResetPassScheam,
  })
 
 
  const inputs=[
    {
      id:'email',
      type:'email',
      title:'User Email',
      name:'email',
      value:formik.values.email

    },
    {
      id:'password',
      type:'password',
      title:'User Password',
      name:'password',
      value:formik.values.password
    },
    {
        id:'password',
        type:'reset',
        title:'User Code',
        name:'code',
        value:formik.values.code
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
    <>
    <div className='container'>
    
    <h2 className=' text-center my-5 text-Color'>Change your Password</h2>
    
     <form onSubmit={formik.handleSubmit} >
    
      { renderInputs}
      
      
     <div className='d-flex justify-content-center mt-4'>
    
     <button type="submit"  className="  px-5 py-2 rounded-2 border text-white bg-mainColor">Send</button>

     
     </div>
     </form>
    </div>
     
    </>
  )
}
