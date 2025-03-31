"use client";
import React, { JSX, useEffect, useState } from "react";
import Image from "next/image";

import { useParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  // Define TypeScript types

  const formatItinerary = (itineraryString: string): JSX.Element[] => {
    const lines = itineraryString
      .replaceAll("+", "")
      .replaceAll("*", "")
      .replaceAll("-", "")
      .replaceAll(":", "")
      .replaceAll(".", "")
      // .replace(/\*\*/g, "") // Remove all **
      // .replace(/\*/g, "") // Remove all *
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    let formatted: JSX.Element[] = [];
    let budgetStart = false;

    lines.forEach((line, index) => {
      if (line.includes("Budget Breakdown")) {
        budgetStart = true;
        formatted.push(
          <ul
            className="w-full px-2 text-left mt-5 text-xl font-medium font-sans mb-2"
            key={index}
          >
            Budget Breakdown:
          </ul>
        );
      } else if (line.includes("Food")) {
        formatted.push(
          <ul
            className="w-full px-2 text-left mt-5 text-xl font-medium font-sans mb-2 "
            key={index}
          >
            Food:
          </ul>
        );
      } else if (line.startsWith("Day")) {
        formatted.push(
          <ul
            className="w-full px-2 text-center mt-5 text-xl font-medium font-sans mb-2 bg-[#00000074]"
            key={index}
          >
            {line}
          </ul>
        );
      } else if (budgetStart) {
        formatted.push(
          <li key={index} className="w-full px-2 text-left ">
            - {line.replace(/: /g, ": ₹")}
          </li>
        );
      } else {
        formatted.push(
          <li key={index} className="w-full px-2 text-left  ">
            &nbsp;&nbsp;• {line}
          </li>
        );
      }
    });

    return formatted;
  };
  const params = useParams();
  const it = params.id ? String(params.id) : "";
  const [hotels, setHotels] = useState("");
  const fetchHotels = async () => {
    try {
      const response = await axios.post(
        `/api/getHotels`,
        {
          itinerary: it,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const body = response.data.data.hotels;
      setHotels(body);

      console.log(body);
    } catch (err: unknown) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchHotels();
  }, []);

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
          <div className="flex flex-col items-center h-fit w-fit gap-2 text-black">
            {formatItinerary(hotels)}
            <hr className="bg-[#995a08] w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
