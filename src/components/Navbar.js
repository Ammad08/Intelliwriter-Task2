import React from "react";
import { Link } from "react-router-dom";

import { SiBloglovin } from "react-icons/si";
import { FaRegShareSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiVoiceprintFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbTextCaption } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaImage } from "react-icons/fa";
import { MdVoiceChat } from "react-icons/md";
import { GiMeshBall } from "react-icons/gi";

export default function Navbar() {
  return (
    <>
      <nav className="    bg-white border-gray-200 dark:bg-gray-900 lg:sticky top-0">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex mx-auto">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="navbar.png" className="h-12 mx-10" alt="/" />
            </a>

            <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/Firstpg"
                  className="block py-2 px-3 text-white hover:underline rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              <li>
                <div className="relative group">
                  <Link
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline-offset-1 md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    AI Tools
                  </Link>

                  <div className="absolute hidden bg-black text-white shadow-lg group-hover:block mt-1 w-auto text-nowrap rounded-lg">
                    <div className="flex flex-row px-14 pr-20 py-14">
                      <ul className="pr-20 grid gap-10">
                        <li className="flex items-center  gap-4">
                          <SiBloglovin className="size-6" />
                          <p>
                            <Link to="Cards">Blog Content</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <CgWebsite className="size-6" />
                          <p>
                            <Link to="Firstpg">Website</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <RiVoiceprintFill className="size-6" />
                          <p>
                            <Link to="Imgdesign">AI Voice Generator</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <FaYoutube className="size-6" />
                          <p>
                            <Link to="/Cards">Youtube Content</Link></p>{" "}
                        </li>
                      </ul>
                      <ul className="pr-20 grid gap-10">
                        <li className="flex items-center gap-4">
                          <FaRegShareSquare className="size-6" />
                          <p>
                            <Link to="/Footer">Social Media </Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <FaBook className="size-6" />
                          <p>
                            <Link to="/Packages">Course Builder</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <TbTextCaption className="size-6" />
                          <Link to="/">Image Caption Generator</Link>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <SiChatbot className="size-6" />
                          <p>
                            <Link to="/Register">AI Chat</Link>
                          </p>{" "}
                        </li>
                      </ul>
                      <ul className="grid gap-10">
                        <li className="flex items-center gap-4">
                          <SiGooglemarketingplatform className="size-6" />
                          <p>
                            <Link to="/Cards">Marketing</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <FaImage className="size-6" />
                          <p>
                            <Link to="/Anime">AI Image Generator</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <MdVoiceChat className="size-6" />
                          <p>
                            <Link to="/Firstpg">Speech Content</Link></p>{" "}
                        </li>
                        <li className="flex items-center gap-4">
                          <GiMeshBall className="size-6" />
                          <p>
                            <Link to="/Cards">Free AI Tools</Link></p>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/Animation"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Bypass AI
                </Link>
              </li>
              <li>
                <Link
                  to="/Footer"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  APIs
                </Link>
              </li>
              <li>
                <Link
                  to="/Packages"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/Anime"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <p>
                  <Link
                    to="/Accordin"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Become an Affiliate
                  </Link>
                </p>
              </li>
              <div className="block lg:hidden ">
                <li>
                  <Link to="/Register">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Register
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Login">
                    <button
                      type="button"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      Login
                    </button>
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/Register">
                  <button
                    type="button"
                    className="focus:outline-none text-white w-28 h-11 bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:bg-purple-900 font-medium rounded-3xl text-sm px-5 py-2.5 mb-2 dark:bg-purple-800 dark:hover:bg-purple-800 dark:focus:ring-purple-900"
                  >
                    Register
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/Login">
                  <button
                    type="button"
                    className="text-gray-900 bg-white border w-28 h-11 border-gray-300 ring-offset-2 ring-2 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:text-white dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:focus:ring-gray-700"
                  >
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
