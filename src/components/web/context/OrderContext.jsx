import axios from "axios";
import { createContext, useState } from "react";
import {  toast } from 'react-toastify';


export const ContextOrder=createContext(null);



export function OrderContextProvider({children}){

    const CreateOrdercontext=async(productId)=>{
        try {
         const token = localStorage.getItem('userToken')
         const {data}= await axios.post (`${import.meta.env.VITE_API_URL}/order`,
         {couponName,address,phone},
         {headers:{Authorization:`Tariq__${token}`}}
         )
        
         
          return (data);
        } 
        catch (error) {
          console.log(error);
        }
      }

      return  <ContextOrder.Provider value={{CreateOrdercontext}}>
      {children}
   </ContextOrder.Provider> 
}