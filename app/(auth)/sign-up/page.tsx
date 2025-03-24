"use client";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <SignUp routing="hash" />
    </div>
  );
};

export default Page;
