import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Input from '../UI/Input/Input'
import Button from '../UI/Buttons/Button'
import { AiOutlineClose } from 'react-icons/ai'
type Props = {
    isOpen: boolean;
    onClose: (value: boolean) => void;
}

const Login = (props: Props) => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`absolute ${props.isOpen? 'flex' : 'hidden'} justify-center items-center min-h-screen overflow-hidden w-full bg-indigo-600/20 backdrop-blur-sm bottom-0 z-50 left-0`}>
        <div className='relative bg-indigo-900/90 rounded-lg p-6 m-2 flex flex-col justify-center items-center gap-6'>
        <span className='absolute top-4 right-4 animate-pulse' onClick={() => props.onClose(false)}>
            <AiOutlineClose className='text-white p-1 rounded-full bg-indigo-950 cursor-pointer' size={25} />
        </span>
            <div className='flex justify-center items-center gap-4'>
            <div>
                <Image src="/assets/images/login-banner.jpg" className='hidden lg:block rounded-lg' alt='logo' width={350} height={100} />
                

            </div>
            <div>
                <form action="">
        <h3 className='text-2xl font-bold mb-4'>Welcome to Switch!</h3>
                    <div className='grid grid-flow-row grid-cols-1 gap-4'>
                        <Input label='Firstname' type='text' placeHolder='Enter first name' name='firstname'/>
                        <Input label='Lastname' type='text' placeHolder='Enter last name' name='lastname' />
                        <Input label='Email' type='password' placeHolder='Enter your email' name='lastname' />
                        <Input label='Channel Name' type='text' placeHolder='Enter your channel name' name='lastname' />
                        
                        <Input label='Date of birth' type='date' placeHolder='Lastname' name='lastname' />
                        <Input label='Password' type='password' placeHolder='Enter your channel name' name='lastname' />
                        <Input label='Confirm Password' type='password' placeHolder='Enter your channel name' name='lastname' />

                        <Button>Sign up</Button>
                        
                    </div>
                </form>
            </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Login