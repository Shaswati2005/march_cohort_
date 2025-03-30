import React from "react";
import Image from "next/image";

interface hotelsProps {
  hotel: string;
  address?: string;
  price: number;
  rating: number;
  link?: string;
  picture?: string;
}

const Hotels: React.FC<hotelsProps> = ({
  hotel,
  address,
  price,
  rating,
  link,
  picture,
}) => {
  return (
    <div className="w-full lg:w-200  xl:w-300 group  h-[200px] rounded-xl bg-[#43210e34]  flex flex-row items-center justify-start gap-5 lg:gap-10s overflow-hidden ">
      <div className="w-45 relative lg:w-60 h-full ">
        <Image
          src={picture || "/mountain.jpg"}
          alt="pic"
          objectFit="cover"
          layout="fill"
          className="absolute "
        />
      </div>
      <br />
      <div className="flex-1 h-full flex  items-center justify-between px-10 gap-2 lg:gap-4  ">
        <div className="flex flex-col justify-evenly items-start ">
          <h1 className="text-2xl lg:text-4xl font-bold font-sans text-[#ffffff]">
            {hotel}
          </h1>
          {address && (
            <h2 className="text-lg lg:text-xl my-2 text-gray-600  ">
              {address}
            </h2>
          )}
          <h4 className="text-lg lg:text-xl font-sans text-white font-normal  rounded-xl ">
            Price(per night)
            <h2 className=" rounded-md text-green-300">Rs.{price}</h2>
          </h4>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h3>User Ratings</h3>
          <h4 className="text-xl lg:text-2xl font-bold font-sans text-[#9a5e15] ">
            {rating}⭐
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
