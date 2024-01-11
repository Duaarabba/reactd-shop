import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
export default function MainFooter() {
  return (
   <div className="footer py-5 bg-mainColor">
     <div className="container">
      <div className="row  ">
        
        
        <div className="col-md-3  me-3">
          <h6 className='my-4 text-white '>Company </h6>
          <p className='text-white  fs-5'>About Us</p>
          <p className='text-white  fs-5'>Contact Us</p>
          <p className='text-white  fs-5'>News & Articles</p>
          <p className='text-white fs-5'>Our Members</p>
        </div>
        <div className="col-md-4  me-3">
          <h6 className='my-4 text-white '>Customer Service </h6>
         
         <p className='text-white  fs-5'>Payments</p>
          <p className='text-white  fs-5'>Shopping</p>
          <p className='text-white  fs-5'>Orders</p>
          <p className='text-white fs-5'>Contact</p>
        
        </div>
       
       
        <div className="col-md-4 ">
          <h6 className='my-4 text-white '>Contact Details</h6>
          <div className=' '>
          <CiLocationOn  className='fs-3  text-white me-2'/>
          <span className='text-white fs-5 '>Location : Palestine</span>
          </div>
          <div  className='pt-3 '>
          <MdOutlineLocalPhone  className='fs-3 text-white me-2 '/>
          <span className='text-white  fs-5 '>Tel : +970595539332</span>
          </div>
           <div  className='pt-3'>
          <MdOutlineMarkEmailRead   className='fs-3 text-white me-2'/>
          <span className='text-white fs-5   '>Email : abc@gmail.com</span>
          </div>
         
        </div>
      </div>
    </div>
    
   </div>


  )
}
