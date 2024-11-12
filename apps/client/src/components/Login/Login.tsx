import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Input from '../UI/Input/Input';
import Button from '../UI/Buttons/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { authSelector, RootState } from '@/store/store';
import { toast } from 'react-toastify';
import { login } from '@/store/features/authAction';

type Props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};

const Login = (props: Props) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const { user, loading, error } = useSelector(authSelector);

  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  const handleLogin = async (event: React.MouseEvent) => {
    try {
      event.preventDefault();

      if (!loginData.email || !loginData.password) {
        toast.error('Please fill all the fields');
        return;
      }

      const { meta } = await dispatch(login(loginData));

      if (meta.requestStatus === 'fulfilled') {
        toast.success('Welcome back!');
        props.onClose(false);
        return;
      } else {
        console.log(error);
        // @ts-ignore
        if (error?.message) {
          // @ts-ignore
          toast.error(error.message);
          return;
        } else {
          toast.error('Something went wrong!');
        }
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
      } justify-center items-center min-h-screen overflow-hidden w-full bg-indigo-600/20 backdrop-blur-sm bottom-0 z-50 left-0`}
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
          <div className="">
            <Image
              src="/assets/images/streaming.png"
              className="hidden lg:block rounded-lg object-center overflow-hidden"
              alt="logo"
              width={350}
              height={100}
            />
          </div>
          <div>
            <form action="">
              <h3 className="text-2xl font-bold mb-4">Welcome back !</h3>
              <div className="grid grid-flow-row grid-cols-1 gap-4">
                <Input
                  label="Email"
                  required={true}
                  onChange={(event) =>
                    setLoginData({
                      ...loginData,
                      email: event.target.value,
                    })
                  }
                  type="email"
                  placeHolder="Enter your email"
                  name="email"
                />

                <Input
                  label="Password"
                  onChange={(event) =>
                    setLoginData({
                      ...loginData,
                      password: event.target.value,
                    })
                  }
                  type="password"
                  placeHolder="Enter your password"
                  name="lastname"
                />

                <Button type="button" onClick={handleLogin}>
                  Log in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Login;
