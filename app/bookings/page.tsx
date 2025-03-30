import React from "react";
import Image from "next/image";
import Hotels from "../components/Hotels";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col items-center gap-10  relative">
      <div className="absolute inset-0 duration-300">
        <Image
          src={"/wmp.png"}
          alt="map"
          objectFit="cover"
          fill
          className="opacity-20 "
        />
      </div>

      <div className="absolute bottom-0 pt-25 w-screen h-full overflow-y-auto flex flex-col  items-start pl-2 lg:pl-0 lg:items-center justify-start gap-10 mt-25">
        <div className="flex  gap-3 lg:gap-0 flex-row items-start lg:items-center">
          <div className=" w-fit flex flex-row items-center justify-start gap-2 lg:gap-10 px-2 lg:px-10">
            <input
              placeholder="destination"
              type="text"
              maxLength={100}
              className="w-50 h-13 px-2 lg:w-100 rounded-full border border-[#c38f4a]  text-[#995a08] text-sm lg:text-lg"
            />
            <input
              placeholder="guests"
              type="number"
              min={1}
              className=" px-1 w-10 lg:w-20 h-13 border rounded-lg border-[#c38f4a]  text-[#995a08] text-sm lg:text-lg"
            />
            <input
              placeholder="days"
              type="number"
              min={1}
              className=" px-1 w-10 lg:w-20 h-13 border rounded-lg border-[#c38f4a]  text-[#995a08] text-sm lg:text-lg"
            />
          </div>
          <input
            type="number"
            min={5000}
            placeholder="budget"
            className="px-1  w-10 lg:w-20 h-13 border rounded-lg border-[#c38f4a]  text-[#995a08] text-sm lg:text-lg "
          />
        </div>

        <div className="w-full h-fit py-10 px-2 flex flex-col items-center justify-start">
          <div className="flex flex-col items-center h-fit w-fit gap-2">
            <Hotels hotel="adaf" address="Himalaya" price={2442} rating={3} />
            <hr className="bg-[#995a08] w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
