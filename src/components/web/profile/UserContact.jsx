
import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import './User.css'
 

export default function UserContact() {
    const {userData,loading}=useContext(UserContext);
    console.log(userData)
   
    if(loading){
      return <Loader />
    }
  return (
    <div className='py-5'>
        <h4 className='mt-4 text-Color '>User Contact</h4>
        <h5>Your Name: {userData.userName}</h5>
        <h5>Your Email :{userData.email}</h5>
        

    </div>
  )
}
