"use client";
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import SideBar from '@/components/Sidebar/SideBar';



type Props = {
    children : React.ReactNode
}

const DefaultLayout = (props: Props) => {
  return (
    
    <main className='flex w-full overflow-hidden'>
        <ToastContainer theme='dark' position='bottom-center' autoClose={5000} />
        <div className='lg:flex hidden'>
        <SideBar />
        </div>
        <div className='w-full flex flex-col'>
        <Navbar />
        {props.children}
        </div>
        
    </main>
    
  )
}

export default DefaultLayout