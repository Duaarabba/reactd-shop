import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import style from './Profile.module.css'
import Loder from '../loader/Loader.jsx'
export default function Profile() {
    const {userData,setUserData,loading}=useContext(UserContext);
    console.log(userData)
    if(loading){
      return <Loder />
    }
  return (
    
<div className={`${style.profile}`}>
       <div className={`${style.profileLinks}`}>
        <nav >
        <a href='#'>Info</a>
        <a href='#'>Contact</a>
        </nav>
        </div>
        
        <div className={`${style.userData}`}>
        <h2>{userData.userName}</h2>
        <img src={userData.image.secure_url}/>
       </div>

       
       
     </div>
  )
}
