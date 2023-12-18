
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { CartContextProvider } from './components/web/context/FeatureCart.jsx';
import { OrderContextProvider } from './components/web/context/OrderContext.jsx';
import {router} from './layout/routes.jsx'
import { UserContext } from "./components/web/context/User.jsx";
import React, { useContext, useEffect } from 'react'


export default function App() {

  let {setUserToken }=useContext(UserContext);
  
  useEffect (()=>{
     if(localStorage.getItem('userToken')!=null){
      setUserToken(localStorage.getItem('userToken'))
     }
  },[])
  
  return (
    
        <OrderContextProvider>

        <CartContextProvider >
        <RouterProvider router={router} />
        </CartContextProvider>
         </OrderContextProvider>
       
  
    
  )
}
