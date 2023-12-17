import React from 'react'
import Footer from '../components/dashboard/footer/Footer'
import Navbar from '../components/dashboard/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer  />
    </>
  )
}
