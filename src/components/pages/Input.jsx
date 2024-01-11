import React from 'react'
import './Input.css'

export default function Input({type='text',id,name,title,value,customCLasses,onChange,errors,onBlur,touched}) {
    
  return (
    <>
    
    <div className="mb-4 d-flex justify-content-center">
      <label htmlFor={id} className="form-label pe-2">{title}</label>
      <input type={type} name={name} className={`form-control ${customCLasses} w-50`}  id={id} value={value} onChange={onChange}
       onBlur={onBlur}   />
      {touched[name]&&errors[name]&&<p className='text text-danger ms-2'>{errors[name]}</p>}
      
    </div>

   
    </>
  )
}
