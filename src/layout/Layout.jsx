import React from 'react'
import Navbar from '../components/web/navbar/Navbar.jsx'
// import Footer from '../components/web/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
// import MainFooter from '../components/web/footer/MainFooter.jsx'

export default function Layout() {
  return (
    <>
    <Navbar  />
    <Outlet  />
    {/* <MainFooter/>
    <Footer  /> */}
    </>
  )
}
