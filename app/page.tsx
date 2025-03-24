"use client";

import Dropdown from "./components/Dropdown";
import Cards from "./components/Cards";
import { useState } from "react";
import Achievement from "./components/Achievement";

export default function Home() {
  const [location, setLocation] = useState<string | null>(null);

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
              title="interest"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
              type="string"
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="locations"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
              type="string"
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="date"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
              type="Date"
            />
          </div>
          <div className="  w-60 h-20 hover:shadow-2xl hover:scale-105 shadow-[#6ca22d] p-3 transition-all  text-[#6ca22d] border border-[#6ba22d31]">
            <Dropdown
              title="time"
              label="locations"
              items={locations}
              onSelect={handleLocationSelect}
              type="time"
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

      <div className="flex flex-col md:flex-row items-center justify-between pl-20 ">
        <div className="max-w-[800px] h-fit overflow-hidden relative border border-black">
          <img
            src="/bg1.jpg"
            className="transition-transform duration-10000 ease-linear transform-origin-center       In_10s_linear_infinite_alternate "
          />
        </div>

        <div className="m-5 h-full flex flex-col items-center justify-items-start ">
          <div className=" w-full h-full gap-5 flex flex-col items-center  justify-items-start">
            <div className="md:px-5 py-2 rounded-lg bg-[#6ba22d27] text-[#5da110] w-50 text-center h-full">
              About Company
            </div>

            <div className="flex flex-row items-center p-3 rounded-xl gap-5 max-w-150 hover:bg-[#5da110] bg-white text-[#5da110] hover:text-white text-sm">
              <div className="w-15 h-15 rounded-full bg-[#5da110]"></div>
              <div className="w-full h-fit text-wrap ">
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type
              </div>
            </div>

            <div className="flex flex-row items-center p-3 rounded-xl gap-5 max-w-150 hover:bg-[#5da110] bg-white text-[#5da110] hover:text-white text-sm">
              <div className="w-15 h-15 rounded-full bg-[#5da110]"></div>
              <div className="w-full h-fit text-wrap ">
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type
              </div>
            </div>

            <div className="flex flex-row items-center p-3 rounded-xl gap-5 max-w-150 hover:bg-[#5da110] bg-white text-[#5da110] hover:text-white text-sm">
              <div className="w-15 h-15 rounded-full bg-[#5da110]"></div>
              <div className="w-full h-fit text-wrap ">
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-10 w-screen h-full  flex items-center justify-center mt-10 lg:mt-30 ">
        <div className="px-5 py-2 rounded-lg bg-[#6ba22d27] text-[#5da110] w-50 text-center h-full">
          popular activities
        </div>
      </div>

      <div className="overflow-x-auto ">
        <div className="w-fit mx-5 lg:mx-10 flex flex-row gap-15 mb-20 mt-5">
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/bg1.jpg"
            link="/"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="text-3xl font-extrabold text-black">Achievements</div>
        <div className="w-full y-fit flex flex-col items-center overflow-x-auto ">
          <div className="flex flex-row items-center  w-fit h-fit my-15 gap-15 ">
            <Achievement
              num={2000}
              sign="+"
              image="/bg1.jpg"
              title="happy travelers"
            />
            <Achievement
              num={136}
              sign="+"
              image="/bg1.jpg"
              title="tours success"
            />
            <Achievement
              num={99}
              sign="%"
              image="/bg1.jpg"
              title="positive reviews"
            />
            <Achievement
              num={62}
              sign="+"
              image="/bg1.jpg"
              title="award winning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
