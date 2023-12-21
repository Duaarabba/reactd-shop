import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Categories from '../categories/Categories';
import './Navbar.css'
import { UserContext } from '../context/User';
import { ContextCart } from '../context/FeatureCart.jsx';
import Loder from '../loader/Loader.jsx'
import { FaCartArrowDown } from "react-icons/fa6";

export default function Navbar() {
 
 
  let {userToken,SetUserToken ,userData,loading ,setUserData}=useContext(UserContext);
  let {cart,setCart}=useContext(ContextCart);
   const navigate=useNavigate()
   const logout =()=>{
    localStorage.removeItem('userToken')
    SetUserToken(null);
    setUserData(null);
    navigate('/')
    
   }
  //  if(loading){
  //   return <h2 className='text-center py-3 text-Color'>......Loading</h2>
  // }
  console.log(cart)
  return (
    <nav className="navbar navbar-expand-lg bg-mainColor py-3 ">
  <div className="container ">
    <a className="navbar-brand text-white" href="#">D-Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link fs-5" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5" to={'/categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5" to={'/allproducts'}>Products</Link>
        </li>
        {userToken? <li className="nav-item">
         <Link className="nav-link fs-5" to="/cart">Cart<FaCartArrowDown  className='text-white ms-2 ms-3'/> {cart.count}</Link>
       </li>:null}
        
        
         
        
        
        <li className="nav-item dropdown">
        </li>
      </ul>
      <ul className="navbar-nav">
         <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {userData!=null?(userData.userName):'Account'}
            </a>
           <ul className="dropdown-menu">
          {userToken==null?
             <>
            <li><Link className="dropdown-item fs-5" to="/register">Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
             <li><Link className="dropdown-item fs-5" to="/login">Login</Link></li>
             </>:
             <>
              <li><Link className="dropdown-item fs-5" to="/profile">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item fs-5"  onClick={logout}>Logout</Link></li>
            </>}
           
           
          </ul>
       </li>

          
          </ul>
      
    </div>
  </div>
</nav>

  )
}
