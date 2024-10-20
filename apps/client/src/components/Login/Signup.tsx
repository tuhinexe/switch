import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Input from '../UI/Input/Input';
import Button from '../UI/Buttons/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux';
import { signup } from '@/store/features/authAction';
import { User } from '@/types';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { authSelector } from '@/store/store';
import { RootState } from '@/store/store';
import { toast } from 'react-toastify';
type Props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};

const Signup = (props: Props) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();

  const {user,loading,error} = useSelector(authSelector);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(event.currentTarget);
    const payload: User = {
      firstName: data.get('firstname') as string,
      lastName: data.get('lastname') as string,
      email: data.get('email') as string,
      userName: data.get('channelName') as string,
      dob: data.get('dob') as string,
      password: data.get('password') as string,
      confirmPassword: data.get('confirmPassword') as string,
    };
    try {
      const {meta} = await dispatch(signup(payload));
      if(meta.requestStatus === 'fulfilled'){
        toast.success('Welcome to Switch!');
        formElement.reset();
        props.onClose(false);
      } else {
        // @ts-ignore
        if(error?.message){
        // @ts-ignore
          toast.error(error.message);
          return
        }
        toast.error('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute ${
        props.isOpen ? 'flex' : 'hidden'
      } justify-center items-center min-h-screen overflow-hidden w-full bg-indigo-600/20 backdrop-blur-md bottom-0 z-50 left-0`}
    >
      <div className="relative bg-indigo-900/90 rounded-lg p-6 m-2 flex flex-col justify-center items-center gap-6">
        <span
          className="absolute top-4 right-4 animate-pulse"
          onClick={() => props.onClose(false)}
        >
          <AiOutlineClose
            className="text-white p-1 rounded-full bg-indigo-950 cursor-pointer"
            size={25}
          />
        </span>
        <div className="flex justify-center items-center gap-4">
          <div>
            <Image
              src="/assets/images/login-banner.jpg"
              className="hidden lg:block rounded-lg"
              alt="logo"
              width={350}
              height={100}
            />
          </div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-4">Welcome to Switch!</h3>
              <div className="grid grid-flow-row grid-cols-1 gap-4">
                <Input
                  required={true}
                  label="Firstname"
                  type="text"
                  placeHolder="Enter first name"
                  name="firstname"
                />
                <Input
                  required={true}
                  label="Lastname"
                  type="text"
                  placeHolder="Enter last name"
                  name="lastname"
                />
                <Input
                  required={true}
                  label="Email"
                  type="email"
                  placeHolder="Enter your email"
                  name="email"
                />
                <Input
                  required={true}
                  label="Channel Name"
                  type="text"
                  placeHolder="Enter your channel name"
                  name="channelName"
                />

                <Input
                  required={true}
                  label="Date of birth"
                  type="date"
                  placeHolder="Lastname"
                  name="dob"
                />
                <Input
                  required={true}
                  label="Password"
                  type="password"
                  placeHolder="Enter your channel name"
                  name="password"
                />
                <Input
                  required={true}
                  label="Confirm Password"
                  type="password"
                  placeHolder="Enter your channel name"
                  name="confirmPassword"
                />

                <Button type="submit">Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Signup;
