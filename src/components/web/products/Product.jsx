import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {ReviewsScheam} from '../validation/validate.js'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../context/User';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa6";
import {ContextCart} from '../context/FeatureCart.jsx'
import Loader from '../loader/Loader';
import './Products.css'
import { FaUser } from "react-icons/fa";
export default function Product() {

  let {setUserToken,userToken}= useContext(UserContext);
  
  const {ProductId}=useParams();
   const {addToCartContext} = useContext(ContextCart);
  //  const [reviews,setReviews]=useState('')
   const getProduct=async()=>{ 
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/${ProductId}`)
     return data.product
   }
   const addToCard =async(productId)=>{
      const req = await addToCartContext(productId)
     return req
    
   }
  
     const initialValues={
    comment:'',
    rating:'',
      }

     const onSubmit= async users=>{
     
      try {
              const token = localStorage.getItem('userToken')
              const {data}= await axios.post (`${import.meta.env.VITE_API_URL}/products/${ProductId}/review`,users
                  
              ,{headers:{Authorization:`Tariq__${token}`}}
              )
                   console.log(data);
                   return (data);
              
            }
             catch (error) {
               console.log(error)
            } 
      
      
     };

       const {data,isLoading}= useQuery('product',getProduct);
  console.log(data)
 
  if (isLoading){
    return <Loader />
  }
      
  const formik= useFormik({
    initialValues,
    onSubmit,
    validationSchema:ReviewsScheam,
  })
 
 
   const inputs=[
    {
      id:'text',
      type:'text',
      title:'Your Comment',
      name:'comment',
      value:formik.values.comment

    },
    {
      id:'text',
      type:'text',
      title:'Rating',
      name:'rating',
      value:formik.values.rating

    }
    
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
    <div className='row  '>
     <div className="col-md-6">
     <div className="prodict-info py-5">
      <h4 className='text-Color mb-3 '>{data.name}</h4>
      <img src={data.mainImage.secure_url} className='img-fluid'/>
     
     <p className='w-75' > Discription : {data.description}</p>
      <p className=' mt-3 text-Color '>Price : {data.price} ₪</p>
      <button className='p-2 rounded-2 border text-white bg-mainColor ' onClick={()=>addToCard(data._id)}>add to cart <FaCartArrowDown  className='text-white ms-2'/> </button>
      </div>
     </div>
     
     <div className="col-md-6">
     <div className=" py-5">
      <h3 className='text-Color mb-3 '>User Reviews</h3>
        
      <div  className=' reviwes overflow-scroll'>
      {
        data.reviews.map((review,index)=>{
          return(
            <div className='d-flex'>
              <FaUser />
            <p className='ms-3'>{review.comment}</p>
            
            </div>
          )
        })
      }
      </div>

     
      </div>
     </div>
    </div>

    
     <form className='py-5' onSubmit={formik.handleSubmit} >
       
      
     <h3 className='text-Color text-center pb-3'>Your Comment</h3>
     { renderInputs }
      
     
     <div className='d-flex justify-content-center mt-4'>
     
     
     <button type="submit"  className="  px-5 py-2 rounded-2 border text-white bg-mainColor">Send </button>
     

     
     </div>
     </form>
    </div>
     
    </>
  )
}


// import axios from 'axios';
// import React, { useContext, useState } from 'react'
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom'
// import Loader from '../loader/Loader';
// import { FaCartArrowDown } from "react-icons/fa6";
// import {ContextCart} from '../context/FeatureCart.jsx'
// import Input from '../../pages/Input.jsx'
// import { useFormik } from 'formik';
// import {ReviewsScheam} from '../validation/validate.js'
// export default function Product() {

//    const {ProductId}=useParams();
//    const {addToCartContext} = useContext(ContextCart);
//   //  const [reviews,setReviews]=useState('')
//    const getProduct=async()=>{ 
//     const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/${ProductId}`)
//      return data.product
//    }
//    const addToCard =async(productId)=>{
//       const req = await addToCartContext(productId)
//      return req
    
//    }

//    const initialValues={
//     comment:'',
//     rating:'',
//    }
//    const onSubmit= async users=>{
//     const {comment,rating}=users
//     try {
//       const token = localStorage.getItem('userToken')
//           const {data}= await axios.post (`${import.meta.env.VITE_API_URL}/products/${ProductId}/review`,{comment,rating}
          
//           ,{headers:{Authorization:`Tariq__${token}`}}
//           )
//            console.log(data);
//            return (data);
      
//     }
//      catch (error) {
      
//     } };

//     const formik= useFormik({
//       initialValues,
//       onSubmit,
//       // validationSchema:ReviewsScheam,
      
//     })
   

//    const inputs=[
//     {
//       id:'text',
//       type:'text',
//       title:'Your Comment',
//       name:'comment',
//       value:formik.values.comment

//     },
//     {
//       id:'text',
//       type:'text',
//       title:'Rating',
//       name:'rating',
//       value:formik.values.rating

//     }
    
// ];

   

//    const renderInputs = inputs.map((ele,index)=>
//     <Input 
//     type={ele.type}
//      id={ele.id} 
//      title={ele.title} 
//      value={ele.value} 
//      name={ele.name}
//      key={index}
//      errors={formik.errors}
//      onChange={ formik.handleChange}
//      onBlur={formik.handleBlur}
//      touched={formik.touched}
//        />)

//    const {data,isLoading}= useQuery('product',getProduct);
//   console.log(data)
 
//   if (isLoading){
//     return <Loader />
//   }
   
//  return(
//   <div className='container pt-5'>
//     <div className="d-flex justify-content-around">
//       <div>
//       <img src={data.mainImage.secure_url} className='img-fluid'/>
     
//       </div>
    
//     <div>
//     <h2 className='text-Color '>{data.name}</h2>
//     {/* <p >{data.description}</p> */}
//     <Input />
  
//     <p className='fs-4 text-Color'>Price:{data.price} ₪</p>
//     <form onSubmit={formik.handleSubmit} >
//       {renderInputs}
//     </form>
//     <button className='p-2 rounded-2 border text-white bg-mainColor ' onClick={()=>addToCard(data._id)}>add to cart <FaCartArrowDown  className='text-white ms-2'/> </button>
//     </div>
//     </div>
  
  

  
//   </div>
//  )
// }
