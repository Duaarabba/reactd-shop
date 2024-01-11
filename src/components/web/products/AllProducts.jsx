
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';
import  style from './AllProducts.module.css'
// import { FaStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function AllProducts() {
  
  const [pageNumber ,setPageNumbr]=useState([]);
  const [products ,setProducts]=useState([]);
  
  // const [current,setCurrent]=useState(1);
  const limit=4;

  // const params= new URLSearchParams();
  // params.append('page',current)
  const getAllProduct=async(i=1)=>{ 
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${i}&limit=${limit}`)
    setPageNumbr (Array.from(Array(data.total /limit ).keys()))   // array nos of page ==> number of products/limit
    setProducts(data.products)
    
   }

   
   console.log(products )
  //  const clickPage=(pageNumber)=>{
  //   setCurrent(pageNumber+1)
  //  }
   
  
    useEffect(()=>{
      getAllProduct();
    },[])

 
  
   return(
    <div className="container">
      <div className="row align-items-lg-stretch">

        

        {products?.map((ele)=>
          <div className="col-md-3 pt-5" key={ele._id}>
             <div className="card overflow-hidden" >
              <div className={`${style.dimention}` } >
              <img src={ele.mainImage.secure_url } className="card-img-top img-fluid   " alt="..." />
              </div>
              
               <div className={`${style.cardBody}`} >
                   <h6 className="card-title text-Color  ">{ele.name}</h6>
                   <p className="card-text">Price: {ele.price} ₪</p>
                   <div className="star">
                      <span>Rating : </span>
                     {Array.from({length: Math.ceil(ele.avgRating)}).map((ele)=>
                       <FaStar color='#ffc107'/>
                       
                     )}
                      
                   </div>
                   
                   {/* <p>{ele.ratingNumbers}</p> */}
                   {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    {ele.reviews.map((review,index)=>
                      <div key={index} >
                        
                       

                      {/* <p>{review.comment}</p>  */}
                   
                     </div>
            )}

                </div>
               </div>

            
           
            
           
          </div>
        )
        }
     
     </div>

    <div aria-label="Page navigation example">
  <ul class="pagination ">
    <li class="page-item ">
      <a class="page-link p-3  " href="#" aria-label="Previous">
        <span aria-hidden="true" className='fs-5' onClick={()=>getAllProduct(num+1)}>&laquo;</span>
      </a>
    </li>
   
    {pageNumber?.map((num)=>{
          return(
            <li className="page-item "key={num+1}>
              <Link className="page-link p-3  fs-5" onClick={()=>getAllProduct(num+1)}> {num+1}</Link>
            </li>
          )
        })
        }

    <li class="page-item">
      <a class="page-link p-3 " href="#" aria-label="Next">
        <span aria-hidden="true" className='fs-5 ' onClick={()=>getAllProduct(num+1)}>&raquo;</span>
      </a>
    </li>
  </ul>
</div>

    </div>
   )
  
   
}


