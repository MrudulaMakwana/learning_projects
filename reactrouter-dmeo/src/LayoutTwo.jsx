import React from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'

export default function LayoutTwo() {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  )
}
