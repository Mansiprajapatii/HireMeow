import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-[10%] p-3 flex items-center text-center justify-center h-screen ">
        <div className="w-[80%] pt-10 h-screen">
          <div className="w-full bg-green h-36 font-bold font-Inter text-lg">
            <span className="text-black">Hire</span>
            <span className="text-[#06279A]">Meow</span>
          </div>
          <div className="w-full bg-red h-80 ">
            <div className="flex gap-1 items-center font-Inter font-medium mb-8">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 10.8333H8.33333C8.79167 10.8333 9.16667 10.4583 9.16667 10V3.33333C9.16667 2.875 8.79167 2.5 8.33333 2.5H3.33333C2.875 2.5 2.5 2.875 2.5 3.33333V10C2.5 10.4583 2.875 10.8333 3.33333 10.8333ZM3.33333 17.5H8.33333C8.79167 17.5 9.16667 17.125 9.16667 16.6667V13.3333C9.16667 12.875 8.79167 12.5 8.33333 12.5H3.33333C2.875 12.5 2.5 12.875 2.5 13.3333V16.6667C2.5 17.125 2.875 17.5 3.33333 17.5ZM11.6667 17.5H16.6667C17.125 17.5 17.5 17.125 17.5 16.6667V10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H11.6667C11.2083 9.16667 10.8333 9.54167 10.8333 10V16.6667C10.8333 17.125 11.2083 17.5 11.6667 17.5ZM10.8333 3.33333V6.66667C10.8333 7.125 11.2083 7.5 11.6667 7.5H16.6667C17.125 7.5 17.5 7.125 17.5 6.66667V3.33333C17.5 2.875 17.125 2.5 16.6667 2.5H11.6667C11.2083 2.5 10.8333 2.875 10.8333 3.33333Z"
                    fill="#2A2B3F"
                  />
                </svg>
              </span>
              <span>Dashboard</span>
            </div>
            <div className="flex gap-1 items-center font-Inter font-medium mb-8">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 18.75H13.75V2.5H18.75V18.75ZM12.5 18.75H7.5V7.5H12.5V18.75ZM6.25 18.75H1.25V11.25H6.25V18.75Z"
                    fill="#2A2B3F"
                  />
                </svg>
              </span>
              <span>Skills</span>
            </div>
            <div className="flex gap-1 items-center font-Inter font-medium mb-8">
              <span>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10.5H12.3333V12.1667H14M14 7.16667H12.3333V8.83333H14M15.6666 13.8333H8.99996V12.1667H10.6666V10.5H8.99996V8.83333H10.6666V7.16667H8.99996V5.5H15.6666M7.33329 3.83333H5.66663V2.16667H7.33329M7.33329 7.16667H5.66663V5.5H7.33329M7.33329 10.5H5.66663V8.83333H7.33329M7.33329 13.8333H5.66663V12.1667H7.33329M3.99996 3.83333H2.33329V2.16667H3.99996M3.99996 7.16667H2.33329V5.5H3.99996M3.99996 10.5H2.33329V8.83333H3.99996M3.99996 13.8333H2.33329V12.1667H3.99996M8.99996 3.83333V0.5H0.666626V15.5H17.3333V3.83333H8.99996Z"
                    fill="#2A2B3F"
                  />
                </svg>
              </span>
              <span>Companies</span>
            </div>
            <div className="flex gap-1 items-center font-Inter font-medium mb-8">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33329 5H1.66663V16.6667C1.66663 17.5833 2.41663 18.3333 3.33329 18.3333H15V16.6667H3.33329V5Z"
                    fill="#2A2B3F"
                  />
                  <path
                    d="M16.6667 1.66675H6.66667C5.75 1.66675 5 2.41675 5 3.33341V13.3334C5 14.2501 5.75 15.0001 6.66667 15.0001H16.6667C17.5833 15.0001 18.3333 14.2501 18.3333 13.3334V3.33341C18.3333 2.41675 17.5833 1.66675 16.6667 1.66675ZM11.675 12.5001C11.1833 12.5001 10.8 12.1084 10.8 11.6251C10.8 11.1334 11.1917 10.7584 11.675 10.7584C12.1667 10.7584 12.5417 11.1334 12.5417 11.6251C12.5333 12.1084 12.1667 12.5001 11.675 12.5001ZM13.7583 7.35841C13.2333 8.13341 12.7333 8.36675 12.4583 8.86675C12.35 9.06675 12.3083 9.20008 12.3083 9.85008H11.0417C11.0417 9.50841 10.9917 8.95008 11.2583 8.47508C11.6 7.86675 12.2417 7.50841 12.6167 6.97508C13.0167 6.40841 12.7917 5.35841 11.6667 5.35841C10.9333 5.35841 10.5667 5.91675 10.4167 6.38341L9.275 5.90841C9.59167 4.96675 10.4333 4.16675 11.6583 4.16675C12.6833 4.16675 13.3917 4.63341 13.75 5.21675C14.0583 5.72508 14.2333 6.65841 13.7583 7.35841Z"
                    fill="#2A2B3F"
                  />
                </svg>
              </span>
              <span>Quizzes</span>
            </div>
          </div>
          <div className="w-full bg-blue h-12">ss</div>
        </div>
      </div>
      <div className="w-[90%] ">
        <div className="w-full pt-2 bg-green-500 h-16">nav</div>
        <div className="w-full mt-1 bg-blue p-5">
          <div className="w-full bg-red-700 h-48"></div>
          <div className="w-full bg-black mt-3 h-36"></div>
          <div className="w-full mt-4">
            <div className="w-full bg-green-800 mb-3 h-24"></div>
            <div className="w-full bg-green-300 h-24">sdsdssdds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
