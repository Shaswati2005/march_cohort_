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
    <div className="fixed top-0 left-0 w-screen z-30 lg:text-xl  bg-[#f99b1f8a] font-bold font-stretch-normal">
      <div className="flex lg:hidden flex-row items-center justify-between px-4 py-2  bg-opacity-50">
        <div>logo</div>
        <button onClick={toggleMenu} className="text-[#ffffff]">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="hidden lg:flex flex-row items-center justify-between px-10 py-1 lg:h-20 bg-opacity-50">
        <div>logo</div>
        <div className="flex flex-1 w-full px-10 py-3 items-center gap-10 text-[#ffffff]">
          <Link
            href={"/"}
            title="home "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Home
            <div className="absolute bottom-0 left-0 w-0 h-[3px]  bg-[#ffffff]  transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </Link>
          <button className="relative group  hover:scale-110 transition-all duration-300">
            About us
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </button>

          <button className="relative group  hover:scale-110 transition-all duration-300">
            Destination
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </button>
          <Link
            href={"/"}
            title="past "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Past tours
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>

          <Link
            href={"/"}
            title="past "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Bookings
            <div className="absolute bottom-0 rounded-xl left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link
            href={"/"}
            title="updates"
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Updates
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link
            href={`${user?.id}`}
            title="current"
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Upcoming Trips
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
        </div>
        {isSignedIn ? (
          <UserButton userProfileMode="modal" />
        ) : (
          <Link
            href={"/sign-in"}
            className="bg-[#ffffff] px-5 py-1 rounded-lg text-xl"
          >
            Sign In
          </Link>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden  bg-opacity-50 p-4">
          <div className="flex flex-col absolute right-2 items-center gap-4 p-4 max-w-[400px] w-full bg-[#ffffff] text-white">
            {isSignedIn ? (
              <UserButton userProfileMode="modal" />
            ) : (
              <Link
                href={"/app/(auth)/sign-in"}
                className="bg-[#ffffff] px-5 py-1 rounded-lg hover:bg-[#f99b1f9a]"
              >
                signin
              </Link>
            )}
            <Link
              href={"/"}
              title="home"
              className="hover:bg-[#c3704a4c] w-full h-fit text-center"
            >
              Home
            </Link>
            <button className="hover:bg-[#c3704a4c] w-full h-fit text-center">
              About us
            </button>
            <button className="hover:bg-[#c3704a4c] w-full h-fit text-center">
              Destination
            </button>
            <Link
              href={"/"}
              title="past "
              className="hover:bg-[#c3704a4c] w-full h-fit text-center"
            >
              Past tours
            </Link>
            <Link
              href={"/"}
              title="home"
              className="hover:bg-[#c3704a4c] w-full h-fit text-center"
            >
              Bookings
            </Link>
            <Link
              href={"/"}
              title="updates "
              className="hover:bg-[#c3704a4c] w-full h-fit text-center"
            >
              Updates
            </Link>
            <Link
              href={`${user?.id}`}
              title="current"
              className="hover:bg-[#c3704a4c] w-full h-fit text-center"
            >
              Upcoming Trips
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
