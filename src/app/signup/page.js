"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import TextField from '@/components/Comman/TextField';
import { EmailCheck, PasswordCheck } from '@/components/Utils/Utils';

const BaseUrl = process.env.BaseUrl
// import axios from "axios"
const Page = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isDisable, setIsDisable] = useState(false);
  const updateUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = () => {
    const isEmailValid = EmailCheck(userData.email)
    const isPasswordValid = PasswordCheck(userData.password);

    if (userData.name.length > 0 && userData.email.length > 0 && userData.password.length > 0) {

      signUp(userData);
    } else {
      console.log({ isEmailValid, isPasswordValid });
    }
    // Replace with your form submission logic
  };


  const signUp = async (data) => {
    toast('Here is your signup function.')
    try {
      const res = await axios.post('http://localhost:8081/registerUser', data);
      setIsDisable(true)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (userData.name.length > 0 && userData.email.length > 0 && userData.password.length > 0) {
      setIsDisable(false)
    } else {
      setIsDisable(true)

    }

  }, [userData])

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url(https://www.yudiz.com/codepen/animation-form/banner.jpg)",
    }}>
      <Toaster />
      <div className="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 flex justify-center items-center  transform transition duration-1000 ease-in-out delay-1500">
        <div className={`pl-4 md:pl-10 pt-6 md:p-8 text-center md:text-left space-y-4 form `}>
          <h1 className='text-center'>Create Account</h1>
          <div>
            <TextField type="text" placeholder="Name" name="name" value={userData.name ?? ""} onChange={updateUserData} />
          </div>
          <div>
            <TextField type="email" placeholder="Email" name="email" value={userData.email ?? ""} onChange={updateUserData} />
          </div>
          <div>
            <TextField className="hover:animate-shake" type="password" placeholder="Password" name="password" value={userData.password ?? ""} onChange={updateUserData} />
          </div>
          <div className='text-center'>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 ... hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit}>
              {isDisable ? 'Sign Up' : 'Try Again'}
            </button>

          </div>
        </div>
      </div>
    </div>
  );

};

export default Page;

