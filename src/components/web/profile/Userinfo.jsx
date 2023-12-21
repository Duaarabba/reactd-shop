import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import Loder from '../loader/Loader.jsx'

export default function Userinfo() {
    const {userData,loading}=useContext(UserContext);
    console.log(userData)
    if(loading){
      return <Loder />
    }
  return (
    <div>
        <h2 className='mt-4 text-Color '>User Information</h2>
        <h4>User Name : {userData.userName}</h4>
        <img src={userData.image.secure_url}/>
        
    </div>
  )
}
