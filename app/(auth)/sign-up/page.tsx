"use client";
import {  SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-fit w-screen flex justify-center items-center bg-white overflow-auto ">
      <div className="w-fit h-fit shadow-2xl rounded-xl shadow-[#5da11072] m-5">
      <SignUp routing="hash" />
      </div>
      
    </div>
  );
};

export default Page;
