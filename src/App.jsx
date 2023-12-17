
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { CartContextProvider } from './components/web/context/FeatureCart.jsx';
// import { ContextOrderProvider } from './components/web/context/OrderContext.jsx';
import {router} from './layout/routes.jsx'
// import { UserContext } from "./components/web/context/User.jsx";
// import React, { useContext, useEffect } from 'react'


export default function App() {

  // let {SetUserToken }=useContext(UserContext);
  
  // useEffect (()=>{
  //    if(localStorage.getItem('userToken')!=null){
  //     SetUserToken(localStorage.getItem('userToken'))
  //    }
  // },[])
  
  return (
    
        // <ContextOrderProvider>

        <CartContextProvider >
        <RouterProvider router={router} />
        </CartContextProvider>
        // </ContextOrderProvider>
       
  
    
  )
}
