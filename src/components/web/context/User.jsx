import {  createContext, useEffect, useState } from "react";
import axios from "axios";


export let UserContext=createContext()

export default function UserContextProvider({children}){
    let [userToken,setUserToken]= useState(null);
    let [userData,setUserData]=useState(null);

    const getUserData=async()=>{
        if(userToken){
            const{data}= await axios.get('https://ecommerce-node4.vercel.app/user/profile',
            {headers:{authorization:`Tariq__${userToken}`}}
            )
            console.log(data);
            setUserData(data.user)
        }
    }
    useEffect(()=>{
        getUserData()
    },[userToken])
   return <UserContext.Provider value={{userToken,setUserToken,userData,setUserData}}>
        {children}
    </UserContext.Provider>
}

  