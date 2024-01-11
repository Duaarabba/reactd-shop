import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import style from './Profile.module.css'
import Loder from '../loader/Loader.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
    const {userData,loading}=useContext(UserContext);
    console.log(userData)
    if(loading){
      return <Loder />
    }
  return (
    
<div className={`${style.profile}`}>
       <div className={`${style.profileLinks}`}>
        <nav >
        <Link >Info</Link>
        <Link to='contact'>Contact</Link>
        <Link to='userOrder'>Order</Link>
        </nav>
        </div>
        
        <div className={`${style.userData}`}>
         <Outlet/>
       </div>

       
       
     </div>
  )
}
