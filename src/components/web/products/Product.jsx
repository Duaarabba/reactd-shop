import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader';
import { FaCartArrowDown } from "react-icons/fa6";
import {ContextCart} from '../context/FeatureCart.jsx'

export default function Product() {

   const {ProductId}=useParams();
   const {addToCartContext} = useContext(ContextCart);
   const getProduct=async()=>{ 
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/${ProductId}`)
     return data.product
   }
   const addToCard =async(productId)=>{
      const req = await addToCartContext(productId)
     return req
    console.log(req);
   }
   const {data,isLoading}= useQuery('product',getProduct);
  //console.log(data);
 
  if (isLoading){
    return <Loader />
  }
   
 return(
  <div className='container pt-5'>
  <img src={data.mainImage.secure_url} className=''/> 
   <h2 className='text-Color '>{data.name}</h2>
   <p className='fs-4 text-Color'>Price:{data.price} ₪</p>

   <button className='p-2 rounded-2 border text-white bg-mainColor ' onClick={()=>addToCard(data._id)}>add to cart <FaCartArrowDown  className='text-white ms-2'/> </button>
  </div>
 )
}
