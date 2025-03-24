"use client";
import React from "react";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="fixed top-0 left-0 w-screen z-30">
      <div className="hidden  md:flex flex-row items-center justify-between px-10 py-1 lg:h-20   bg-white inset-0  bg-opacity-50 ">
        <div>logo</div>
        <div className="flex flex-1 px-10 py-3 items-center gap-10 text-[#8bc34a]">
          <Link href={"/"} title="home">
            {" "}
            home
          </Link>
          <button>about us</button>
          <button>tours</button>
          <button>destination</button>
          <Link href={"/"} title="past ">
            past tour
          </Link>
          <Link href={"/"} title="updates">
            updates
          </Link>
          <Link href={`${user?.id}`} title="current">
            {" "}
            current
          </Link>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="bg-[#8bc34a] px-5 py-1 rounded-lg ">signin</div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
