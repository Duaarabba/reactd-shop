import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import Loader from '../loader/Loader.jsx';

export default function CategoriesDetails() {
    
    //console.log(useParams())
    const {CategoryId}= useParams();
    const getCategoriesDetails=async()=>{
        const {data}= await axios.get((`${import.meta.env.VITE_API_URL}/products/category/${CategoryId}`))
        return data.products;

    }
   const {data,isLoading}= useQuery('category-details',getCategoriesDetails);
   console.log(data);
   if (isLoading){
    <Loader />
   }
 return(
       <div className="container">
           <div className="  row row-gap-5 py-5">
        { data? data.map((ele)=>
        
        <div className='product col-lg-6 ' key={ele._id}>
          <img src={ele.mainImage.secure_url} className=''/>
          <h4 className='pt-2 fs-5'>{ele.name}</h4>
          
          <Link to={`/products/${ele._id}`} className='text-decoration-none text-Color'>Details</Link>
  
         </div>
        
          
        ):<h2>No Category Found</h2>}  
        </div>
       </div>
       
       
   

    
       
         
    
        
    
  
    
    
 )
}
