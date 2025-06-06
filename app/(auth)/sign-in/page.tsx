"use client";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-screen  w-screen flex justify-center items-center bg-white overflow-auto">
      <div className="w-fit h-fit shadow-2xl rounded-xl shadow-[#5da11072] m-5">
        <SignIn routing="hash" />
      </div>
    </div>
  );
};

export default Page;
