import React from 'react'
import Information from '../Information/Information'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
     <Navbar/>
    {/* {Change routing here} */} 
    <Outlet></Outlet>
    <Information/>
    <Footer/>
    </>
  )
}
