import axios from "axios";
import { createContext, useState } from "react";
import {  toast } from 'react-toastify';
export const ContextCart=createContext(null);



export function CartContextProvider({children}){
   
   const addToCartContext=async(productId)=>{
     try {
      const token = localStorage.getItem('userToken')
      const {data}= await axios.post (`${import.meta.env.VITE_API_URL}/cart`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      )
      if(data.message=='success'){
        toast.success('Product added Succesfully', {
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
       return (data);
     } 
     catch (error) {
       console.log(error);
     }
   }

   let [cart,setCart]=useState(0);
   

   const getCartContext  =async ()=>{
     try {
      const token = localStorage.getItem('userToken');
      const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
      {headers:{Authorization:`Tariq__${token}`}})
      setCart(data)
      return data;
     }
      catch (error) {
      console.log(error)
     }
   }

   const removeItemContext= async(productId)=>{
     try {
        const token = localStorage.getItem('userToken');
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}},
        )
        return data;
     } 
     
     catch (error) {
      console.log(error)
     }
   }

   let [Count,setCount]=useState(0);

   const decreaseCart=async(productId)=>{
    try {
      const token = localStorage.getItem('userToken');
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}},
        ) 
        
        //console.log(data.count)
        setCount(--Count)
        return data;
    } 
    catch (error) {
      console.log(error)
    }
   }



   const increaseCart=async(productId)=>{
    try {
      const token = localStorage.getItem('userToken');
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}},
        ) 
        
       
        setCount(++Count)
        return data;
    } 
    catch (error) {
      console.log(error)
    }
   }
   const clearCart=async(productId)=>{
    try {
      const token = localStorage.getItem('userToken');
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,
        {},
        {headers:{Authorization:`Tariq__${token}`}},
        ) 
    
        return data;
    } 
    catch (error) {
      console.log(error)
    }
   }
   
   
   
  
   
 return  <ContextCart.Provider value={{addToCartContext ,getCartContext,removeItemContext,clearCart ,cart,setCart,increaseCart,decreaseCart}}>
    {children}
 </ContextCart.Provider> 


}


