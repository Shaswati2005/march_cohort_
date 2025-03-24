"use client";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <SignIn routing="hash" />
    </div>
  );
};

export default Page;
