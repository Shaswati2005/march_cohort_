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
    <div className="fixed top-0 left-0 w-screen z-30 lg:text-xl  bg-[#f99b1f8a] font-sans font-medium font-stretch-normal">
      <div className="flex lg:hidden flex-row items-center justify-between px-4 py-2  bg-opacity-50">
        <div>logo</div>
        <button onClick={toggleMenu} className="text-[#ffffff]">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="hidden lg:flex flex-row items-center justify-between px-10 py-1 lg:h-20 bg-opacity-50">
        <div>
          <svg
            id="minilogo"
            width="28"
            height="21"
            viewBox="0 0 28 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.176 3.456C1.536 3.456 1.04 3.28 0.688 2.928C0.352 2.56 0.184 2.12 0.184 1.608C0.184 1.48 0.2 1.328 0.232 1.152C0.28 0.975999 0.336 0.823999 0.4 0.696C0.608 0.791999 0.912 0.863999 1.312 0.912C1.728 0.943999 2.208 0.959999 2.752 0.959999C3.568 0.959999 4.488 0.927999 5.512 0.863999C6.552 0.783999 7.544 0.703999 8.488 0.623999C9.432 0.543999 10.264 0.471999 10.984 0.407999C11.704 0.327999 12.168 0.287999 12.376 0.287999C12.968 0.287999 13.392 0.511999 13.648 0.959999C13.92 1.392 14.12 1.976 14.248 2.712C13.832 2.68 13.416 2.656 13 2.64C12.6 2.608 12.256 2.592 11.968 2.592C11.456 2.592 10.936 2.608 10.408 2.64C9.896 2.672 9.376 2.72 8.848 2.784C8.624 3.248 8.376 3.8 8.104 4.44C7.832 5.064 7.56 5.72 7.288 6.408C7.032 7.096 6.784 7.784 6.544 8.472C6.304 9.144 6.096 9.752 5.92 10.296C5.568 11.352 5.256 12.328 4.984 13.224C4.728 14.12 4.496 14.96 4.288 15.744C4.096 16.512 3.928 17.248 3.784 17.952C3.64 18.656 3.512 19.344 3.4 20.016C2.328 19.856 1.432 19.184 0.712 18C0.84 17.504 0.992 16.968 1.168 16.392C1.36 15.8 1.576 15.136 1.816 14.4C2.072 13.648 2.368 12.8 2.704 11.856C3.04 10.912 3.424 9.84 3.856 8.64C4.016 8.192 4.184 7.728 4.36 7.248C4.536 6.752 4.704 6.264 4.864 5.784C5.04 5.304 5.192 4.84 5.32 4.392C5.464 3.944 5.584 3.536 5.68 3.168C5.008 3.248 4.368 3.32 3.76 3.384C3.168 3.432 2.64 3.456 2.176 3.456ZM27.1814 1.824C27.2294 2.096 27.2614 2.288 27.2774 2.4C27.3094 2.496 27.3254 2.632 27.3254 2.808C27.3254 3.336 27.2054 3.832 26.9654 4.296C26.7414 4.744 26.4294 5.064 26.0294 5.256C25.7094 4.824 25.3174 4.456 24.8534 4.152C24.3894 3.832 23.8774 3.576 23.3174 3.384C22.7734 3.176 22.2054 3.024 21.6134 2.928C21.0214 2.832 20.4454 2.784 19.8854 2.784C19.3254 2.784 18.7974 2.832 18.3014 2.928C17.8214 3.008 17.3894 3.128 17.0054 3.288C16.6374 3.432 16.3414 3.616 16.1174 3.84C15.9094 4.064 15.8054 4.32 15.8054 4.608C15.8534 4.96 16.0694 5.32 16.4534 5.688C16.8374 6.04 17.3094 6.392 17.8694 6.744C18.4294 7.08 19.0454 7.416 19.7174 7.752C20.4054 8.088 21.0774 8.408 21.7334 8.712C22.5494 9.096 23.2534 9.456 23.8454 9.792C24.4374 10.112 24.9254 10.472 25.3094 10.872C25.6934 11.256 25.9814 11.696 26.1734 12.192C26.3654 12.688 26.4614 13.288 26.4614 13.992C26.4614 14.808 26.3254 15.576 26.0534 16.296C25.7814 17 25.3814 17.616 24.8534 18.144C24.3414 18.672 23.7174 19.08 22.9814 19.368C22.2454 19.672 21.4214 19.824 20.5094 19.824C19.6134 19.824 18.6454 19.688 17.6054 19.416C16.5654 19.144 15.5894 18.768 14.6774 18.288C13.7814 17.824 13.0294 17.288 12.4214 16.68C11.8294 16.056 11.5334 15.4 11.5334 14.712C11.5334 14.392 11.6214 13.984 11.7974 13.488C11.9894 12.992 12.3254 12.472 12.8054 11.928C12.8534 12.408 13.1094 12.976 13.5734 13.632C14.0534 14.288 14.7654 14.896 15.7094 15.456C16.5894 15.968 17.4934 16.344 18.4214 16.584C19.3654 16.808 20.2454 16.92 21.0614 16.92C21.9574 16.92 22.6854 16.808 23.2454 16.584C23.8054 16.36 24.2454 16.096 24.5654 15.792C24.8854 15.472 25.1094 15.152 25.2374 14.832C25.3654 14.512 25.4374 14.256 25.4534 14.064C25.4374 13.744 25.2854 13.44 24.9974 13.152C24.7254 12.848 24.3494 12.56 23.8694 12.288C23.4054 12 22.8614 11.712 22.2374 11.424C21.6134 11.136 20.9654 10.848 20.2934 10.56C19.2854 10.112 18.4134 9.696 17.6774 9.312C16.9574 8.912 16.3574 8.512 15.8774 8.112C15.4134 7.696 15.0694 7.264 14.8454 6.816C14.6374 6.368 14.5334 5.856 14.5334 5.28C14.5334 4.384 14.8054 3.536 15.3494 2.736C15.8934 1.936 16.6774 1.328 17.7014 0.912C18.2134 0.688 18.7574 0.527999 19.3334 0.431999C19.9254 0.335999 20.5014 0.287999 21.0614 0.287999C22.1174 0.287999 23.1494 0.431999 24.1574 0.719999C25.1654 1.008 26.1734 1.376 27.1814 1.824Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-1 w-full px-10 py-3 items-center gap-10 text-[#ffffff]">
          <Link
            href={"/"}
            title="home "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Home
            <div className="absolute bottom-0 left-0 w-0 h-[3px]  bg-[#ffffff] mt-1  transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </Link>
          <button className="relative group  hover:scale-110 transition-all  duration-300">
            About us
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </button>

          <button className="relative group  hover:scale-110 transition-all duration-300">
            Destination
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </button>
          <Link
            href={"/"}
            title="past "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Past tours
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>

          <Link
            href={"/"}
            title="past "
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Bookings
            <div className="absolute bottom-0 rounded-xl left-0 w-0 h-[3px] mt-1 bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link
            href={"/"}
            title="updates"
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Updates
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link
            href={`${user?.id}`}
            title="current"
            className="relative group  hover:scale-110 transition-all duration-300"
          >
            Upcoming Trips
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
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
