
import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';

 

export default function UserContact() {
    const {userData,loading}=useContext(UserContext);
    console.log(userData)
   
    if(loading){
      return <Loader />
    }
  return (
    <div>
        <h2 className='mt-4 text-Color '>User Contact</h2>
        <h4>Your Name: {userData.userName}</h4>
        <h4>Your Email :{userData.email}</h4>
        

    </div>
  )
}
