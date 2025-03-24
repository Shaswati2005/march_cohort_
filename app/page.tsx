"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [guest, setGuest] = useState<number | null>(null); // Assuming guest is a number
  const [dates, setDates] = useState<Date[] | null>(null);

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
  };

  const locations = [
    { label: "delhi", value: "delhi" },
    { label: "raipur", value: "raipur" },
    { label: "shimla", value: "shimla" },
    { label: "puri", value: "puri" },
    { label: "kolkata", value: "kolkata" },
  ];

  return (
    <div className="w-screen h-full  bg-white flex-col items-center justify-center">
      <div className="w-screen h-full bg1 ">
        <div className="pt-30 flex flex-col   gap-10 items-center lg:items-start justify-end  lg:p-30 p-20">
          <div className=" flex-col gap-10">
            <h1 className="font-extrabold  text-5xl lg:text-9xl text-white ephesis-regular">
              Travelsiders
            </h1>
            <h2 className="lg:pl-[30%] pl-[5%] poppins-thin tgowild font-stretch-ultra-expanded   lg:text-3xl flex items-end justify-end">
              Lets personalise your travels
            </h2>
          </div>
          <div className="lg:px-45 lg:py-20 ">
            <button
              type="button"
              className="lg:text-2xl hover:cursor-pointer  lg:px text-lg text-white w-40 bg-[#6ca22d] lg:w-50 py-3 border-1 rounded-sm hover:bg-white hover:text-[#7bb471] hover:shadow-2xs shadow-[#8bc34a] hover:scale-105 transition-all "
            >
              Get Started
            </button> 
          </div>
        </div>
      </div>

      <div className="h-full w-screen  py-10 md:py-20 flex flex-col items-center justify-center bg-white text-black z-10">
        <div className="flex flex-col lg:flex-row  items-center gap-1 ">
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="locations"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="locations"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="locations"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="locations"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
            />
          </div>
        </div>
      </div>

      <div className="px-20 py-20 w-screen h-full  flex items-start  justify-center gap-5">
        <input
          type="string"
          placeholder="search locations"
          className="px-5 py-2  bg-[#6ba22d27] text-[#5da110] w-100 rounded-full text-start h-full"
        ></input>
        <div className="hover:bg-[#599a0e] bg-white hover:text-white text-[#599a0e] w-fit h-fit content-center px-2 py-2 rounded-lg border-[#599a0e] ">
          filter
        </div>
      </div>

      <div className="px-20 py-20 w-screen h-full  flex items-center justify-center">
        <div className="px-5 py-2 rounded-lg bg-[#6ba22d27] text-[#5da110] w-50 text-center h-full">
          popular activities
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pl-20 ">
        <div className="w-[800px] h-fit overflow-hidden relative border border-black">
          <img
            src="/bg1.jpg"
            className="transition-transform duration-10000 ease-linear transform-origin-center       In_10s_linear_infinite_alternate "
          />
        </div>

        <div>
          <div className=" w-full h-full  flex flex-col items-center justify-items-start">
            <div className="px-5 py-2 rounded-lg bg-[#6ba22d27] text-[#5da110] w-50 text-center h-full">
              About Company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
