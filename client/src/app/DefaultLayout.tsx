"use client";
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import SideBar from '@/components/Sidebar/SideBar';
import MobileSidebar from '@/components/Sidebar/MobileSidebar';



type Props = {
    children : React.ReactNode
}

const DefaultLayout = (props: Props) => {
  return (
    
    <main className='flex w-full'>
        <ToastContainer theme='dark' position='bottom-center' autoClose={5000} />
        <div className='lg:flex hidden'>
        <SideBar />
        </div>
        <div className='flex lg:hidden'>
        <MobileSidebar />
        </div>
        <div className='w-full flex flex-col'>
        <Navbar />
        <section className=''>
        {props.children}
        </section>
        </div>
        
    </main>
    
  )
}

export default DefaultLayout