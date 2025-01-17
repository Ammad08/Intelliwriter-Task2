import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    
    
    <div className="max-h-screen flex flex-col md:flex-row text-white md:overflow-y-visible lg:overflow-y-hidden">
      <div className="w-full md:w-2/3 left-0 opacity-10 md:opacity-100 -mt-40 object-cover">
        <Link
          className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
          to="/"
        >
          Back
        </Link>
        <img
          src="https://intelliwriter.io/backgrounds/Loginbg.webp"
          alt="background"
          className="hidden lg:block xl:block w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#0F172A] w-full  sm:h-full  md:w-1/3 p-5 flex flex-col items-center py-6">
      <img src="navbar.png" alt="navbar" className="px-28  pb-6" />
        <h1 className="font-bold md:-mt-9 lg:mt-0  text-4xl text-center">Login</h1>
        <p className="text-gray-300 md:py-2 py-5 lg:py-5 px-6 lg:px-14 text-center">
          Start generating your thoughts with Intelliwriter.io
        </p>
        <form className="w-full max-w-xs">
          <div className="mb-6 md:mb-2 lg:mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded-lg border-transparent bg-gradient-to-t from-[#1C204B] p-2 to-[#10172D] py-2">
              <span className="material-icons text-gray-400 mr-2">
                <div className="text-white">
                  <MdEmail/>
                </div>
              </span>
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="mb-6 md:mb-2 lg:mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg border-transparent bg-gradient-to-t from-[#1C204B] p-2 to-[#10172D] py-2">
              <span className="material-icons text-gray-400 mr-2">
                <div className="text-white">
                <RiLock2Fill/>  
                </div>
              </span>
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="blank"
              className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-700"
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-8 mb-6 md:mb-2 lg:mb-6">
            <button className="bg-gradient-to-r from-[#6F26C8] to-[#4B1D84] hover:from-[#4B1D84] hover:to-[#6F26C8] text-white font-bold py-2 px-4 rounded-full w-full">
              Login
            </button>
          </div>
          <p className="mt-4 text-center mb-6 md:mb-2 lg:mb-6">
            Don't have an account?{" "}
            <a href="blank" className="text-pink-500 hover:text-pink-700">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
    
    
    
    </>
  )
}
