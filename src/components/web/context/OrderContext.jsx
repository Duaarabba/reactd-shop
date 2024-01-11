import axios from "axios";
import { createContext, useState } from "react";




export const ContextOrder=createContext(null);



export function OrderContextProvider({children}){
  
     const [order,setOrder]=useState(null)
    const CreateOrdercontext=async({couponName,address,phone})=>{
        try {
         const token = localStorage.getItem('userToken')
         const {data}= await axios.post (`${import.meta.env.VITE_API_URL}/order`,
         {'couponName':couponName,
           'address':address,
            'phone':phone
          },
         {headers:{Authorization:`Tariq__${token}`}}
         )
        
          console.log(data);
          return (data);
        } 
        catch (error) {
          console.log(error);
        }
      }
      const getOrder=async()=>{
        try {
         const token = localStorage.getItem('userToken')
         const {data}= await axios.get (`${import.meta.env.VITE_API_URL}/order`,
         {headers:{Authorization:`Tariq__${token}`}}
         )
         setOrder(data);
          
          return (data);
        } 
        catch (error) {
          console.log(error);
        }
      }

      return  <ContextOrder.Provider value={{CreateOrdercontext,getOrder,order}}>
      {children}
   </ContextOrder.Provider> 
}