import React from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {registerScheam} from '../validation/validate.js';
import {  toast } from 'react-toastify';
import axios from 'axios';
;
export default function Register() {
  const initialValues={
     userName:'',
        email:'',
        password:'',
        image:'',
    }

    const handelFielChange = (event)=>{
      
      formik.setFieldValue('image',event.target.files[0]);
      
    }
     const onSubmit= async users=>{
     //console.log(users)
      const formData= new FormData();
      formData.append('userName',users.userName);
      formData.append('email',users.email);
      formData.append('password',users.password);
      formData.append('image',users.image);

      const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
      if(data.message=='success'){
        toast('Acount Created Succesfully , PLZ Varify your Email to Login', {
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
    validationSchema:registerScheam,
  })
 
 
  const inputs=[
    {
      id:'username',
      type:'text',
      title:'User Name',
      name:'userName',
      value:formik.values.userName
    },
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
      id:'image',
      type:'file',
       title:'User Image',
       name:'image',
      onChange:handelFielChange,
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
     onChange={ele.onChange || formik.handleChange}
     onBlur={formik.handleBlur}
     touched={formik.touched}
       />)
return (
    <>
    <div className='container'>
    <h2 className=' text-center my-5 text-Color '>Create Acount</h2>
     <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
      { renderInputs}
     <div className='d-flex justify-content-center'>
     <button type="submit" disabled={formik.isValid==false} class=" p-2 rounded-2 border text-white bg-mainColor ">Register</button>
     </div>
     </form>
    </div>
     
    </>
  )
}
