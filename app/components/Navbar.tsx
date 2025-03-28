"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-30">
      <div className="flex md:hidden flex-row items-center justify-between px-4 py-2 bg-white bg-opacity-50">
        <div>logo</div>
        <button onClick={toggleMenu} className="text-[#c38f4a]">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="hidden md:flex flex-row items-center justify-between px-10 py-1 lg:h-20 bg-white bg-opacity-50">
        <div>logo</div>
        <div className="flex flex-1 px-10 py-3 items-center gap-10 text-[#c38f4a] ">
          <Link href={"/"} title="home">
            Home
          </Link>
          <button>About us</button>
          <button>Tours</button>
          <button>Destination</button>
          <Link href={"/"} title="past ">
            Past tours
          </Link>
          <Link href={"/"} title="updates">
            Updates
          </Link>
          <Link href={`${user?.id}`} title="current">
            Upcoming Trips
          </Link>
        </div>
        {isSignedIn ? (
          <UserButton userProfileMode="modal" />
        ) : (
          <Link
            href={"/sign-in"}
            className="bg-[#c38f4a] px-5 py-1 rounded-lg text-xl"
          >
            Sign In
          </Link>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-50 p-4">
          <div className="flex flex-col items-center gap-4 bg-orange-400 text-white">
            {isSignedIn ? (
              <UserButton userProfileMode="modal" />
            ) : (
              <div className="bg-orange-400 px-5 py-1 rounded-lg">signin</div>
            )}
            <Link href={"/"} title="home">
              Home
            </Link>
            <button>About us</button>
            <button>Tours</button>
            <button>Destination</button>
            <Link href={"/"} title="past ">
              Past tours
            </Link>
            <Link href={"/"} title="updates">
              Updates
            </Link>
            <Link href={`${user?.id}`} title="current">
              Upcoming Trips
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
