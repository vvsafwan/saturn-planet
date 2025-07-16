import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UserLayouts() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
