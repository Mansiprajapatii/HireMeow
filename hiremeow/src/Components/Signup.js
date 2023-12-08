import React from "react";
import { ReactComponent as Logo } from "../assets/Login.svg";

const Signup = () => {
  return (
    <div className="h-screen bg-blue-600 w-full relative">
      <div className="flex flex-row bg-white w-9/12  mt-14 absolute h-5/6 ml-48 rounded-r-lg  rounded-l-lg">
        {/* left side image box */}
        <div className=" w-6/12 bg-sky-500">
          <Logo />
        </div>
        {/* right side box */}
        <div className=" w-6/12 text-center font-semibold text-2xl">
          <div className=" text-sky-500 mt-12 mr-96 ml-6">Hey, Folks</div>

          {/* box to sign in options
          <div className="flex flex-row  space-x-5 h-10 mt-5   justify-center">
            <div className=" rounded-full h-8 w-8 ">
              <img src={gg} alt="Logo" />
            </div>
            <div className=" rounded-full h-8 w-8">
              <img src={ff} alt="Logo" />
            </div>
            <div className=" rounded-full h-8 w-8">
              <img src={tt} alt="Logo" />
            </div>
          </div> */}

          {/* text */}
          <div className=" bg-slate-500 w-40 mt-3 -ml-6">
            <span className="absolute font-normal text-base  ">
              Let's create your account...
            </span>
          </div>

          {/* input field */}
          <div className="sm:col-span-4 mt-16">
            <label
              htmlFor="name"
              className=" text-lg font-bold text-gray-900 -ml-96 "
            >
              Full Name
            </label>
            <div className="mt-2 ml-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                placeholder="enter your name"
                className=" caret-slate-300 block w-5/6 ml-[50px] rounded-md border-0 py-1.5 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 mt-4">
            <label
              htmlFor="email"
              className=" text-lg font-bold text-gray-900 -ml-96 mr-6"
            >
              Email
            </label>
            <div className="mt-2 ml-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="enter your email"
                className=" caret-slate-300 block w-5/6 ml-[50px] rounded-md border-0 py-1.5 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 mt-4">
            <label
              htmlFor="password"
              className=" text-lg font-bold leading-6 text-gray-900 -ml-96"
            >
              Password
            </label>
            <div className="mt-2 ml-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                placeholder="enter your password"
                className=" caret-slate-300 block w-5/6 ml-[50px] rounded-md border-0 py-1.5 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div className="flex flex-row mt-5  space-x-3  w-full">
            <input type="checkbox" id="checkbox" className="ml-[50px]" />
            <label htmlFor="checkbox" className=" text-base font-[400] ">
              keep me signed in
            </label>

            <div className=" text-base font-[400]  space-x-5  text-sky-500">
              <span className=" ml-[160px]">Forget password ?</span>
            </div>
          </div> */}

          {/* submit button  */}
          <div className="mt-8">
            <button class="rounded-full w-96 p-1 bg-sky-500 font-normal text-white text-base">
              Sign Up
            </button>
          </div>

          <div className=" w-10/12 inline-flex items-center justify-center mt-4">
            <hr className=" w-9/12 h-px mt-4 bg-gray-600 border-0 dark:bg-gray-700 " />
          </div>

          <div className="">
            <span className=" text-sm font-normal">
              Already have an account?
            </span>{" "}
            <span className=" text-sky-500  text-sm">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
