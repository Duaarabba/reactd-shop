import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRout({children}) {
   if (localStorage.getItem('userToken')==null)
   return <Navigate to ='/login'/>
  return children
}
