
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';
export default function AllProducts() {
  const getallProduct=async()=>{ 
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products?page=1&limit=10`)
    return data
   }
   const {data,isLoading} = useQuery('web_products',getallProduct)
   console.log(data);


  //  start Paginate 
   const items = [1, 2, 3, 4];

   function Items({ currentItems }) {
     return (
       <>
         {currentItems &&
           currentItems.map(() => (
             <div>
               <h3></h3>
             </div>
           ))}
       </>
     );
   }
   
   function PaginatedItems({ itemsPerPage }) {
    
     const [itemOffset, setItemOffset] = useState(0);
   
   
     const endOffset = itemOffset + itemsPerPage;
    
     const currentItems = items.slice(itemOffset, endOffset);
     const pageCount = Math.ceil(items.length / itemsPerPage);
   
    
     const handlePageClick = (event) => {
       const newOffset = (event.selected * itemsPerPage) % items.length;
     
       setItemOffset(newOffset);
     };
   
     return (

       
       <>
       <div>
        {products.map((ele)=>{
          <h2>{ele.name}</h2>
        })}
       </div>

         <Items currentItems={currentItems} />
         <ReactPaginate
           breakLabel="..."
           nextLabel="next >"
           marginPagesDisplayed={3}
           pageRangeDisplayed={3}
           onPageChange={handlePageClick}
           
           pageCount={pageCount}
           previousLabel="< previous"
           renderOnZeroPageCount={null}
           activeClassName={active}
         />
       </>
     );
   }
   
  
   
}

