"use client";
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'



type Props = {
    children : React.ReactNode
}

const DefaultLayout = (props: Props) => {
  return (
    
    <main>
        <ToastContainer theme='dark' position='bottom-center' autoClose={5000} />
        <Navbar />
        
        {props.children}
        
    </main>
    
  )
}

export default DefaultLayout