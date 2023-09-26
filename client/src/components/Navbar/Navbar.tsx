'use client';
import React from 'react'
import {toast} from 'react-toastify'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex w-full'>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar