import React from "react";
import lm from "../assets/Login.svg";

function Signup() {
  return (
    <div className="h-screen   md: bg-sky-600">
      <div className="m-auto bg-slate-50 w-10/12 h-5/6 flex  ">
        <div className="w-5/12 bg-[#B8E0F2] ">
          <img className="w-5/6 mx-6 h-96" src={lm} alt="login"></img>
        </div>
        <div className="grid">
          <span className="text-[#2FAAF1] font-semibold text-xl md:text-3xl mx-20 md:ml-56">
            Sign In
          </span>
          <div className="flex">
            <ui>
              <li></li>
            </ui>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
