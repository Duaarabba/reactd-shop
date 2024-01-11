import React, { useContext } from 'react'
import { ContextOrder } from '../context/OrderContext.jsx'
import { useQuery } from 'react-query';

export default function UserOrderInfo() {
    const {getOrder,order}=useContext(ContextOrder);
  
    
    const getuserOrder =async()=>{
        const req = await getOrder();
        
        return req;
        
    }

   const {data,isLoading}=useQuery('order',getuserOrder )
   console.log(data)
  return (
    
     <div className="container my-5">
         <h4 className='text-Color py-3'>Orders</h4>
          <table class="table ">
  <thead >
    <tr >
      <th scope="col" >Coupon Name</th>
      <th scope="col" >Phone Number</th>
      <th scope="col">Adress</th>
      
      <th scope="col" >Final Price</th>
      <th scope="col" >Payment Type</th>
      <th scope="col" >Status</th>
    </tr>
  </thead>
  <tbody>
    
    {data?.orders.map((ele)=>
     <tr className='p-3 '>
      <th scope="row">{ele.couponName}</th>
      <td>{ele.phoneNumber}</td>
      <td>{ele.address}</td>
      <td>{ele.finalPrice}</td>
      <td>{ele.paymentType}</td> 
      <td>{ele.status}</td>
       
     </tr>
      
    )}
         
      
    
   
  </tbody>
</table>
     </div>
  )
}

