import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className='relative'>
      <Navbar/>
      <main className='h-full dark:bg-slate-800'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout