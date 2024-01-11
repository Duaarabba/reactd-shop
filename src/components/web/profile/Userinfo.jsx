import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import Loder from '../loader/Loader.jsx'
import   './User.css'

export default function Userinfo() {
    const {userData,loading}=useContext(UserContext);
    console.log(userData)
    if(loading){
      return <Loder />
    }
  return (
    <div className='py-5  '>
        <h4 className='my-4 text-Color  '>User Information</h4>
        <h6 className='my-4 ' >User Name : {userData.userName}</h6>
        <img src={userData.image.secure_url}/>
        
    </div>
  )
}
