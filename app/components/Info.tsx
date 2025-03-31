import React, { JSX, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

interface InfoProps {
  id: number;
  user: string;
  city: string;
  interests: string;
  travel_date: string;
  travel_time: string;
  itinerary?: string;
}

const Info: React.FC<InfoProps> = ({
  city,
  interests,
  travel_date,
  travel_time,
  itinerary,
}) => {
  const [open, setopen] = useState(false);
  const [image, setImage] = useState("/bg1.jpg");
  const [loading, setLoading] = useState(false);

  const formatItinerary = (itineraryString: string): JSX.Element[] => {
    const lines = itineraryString
      .replaceAll("+", "")
      .replaceAll("*", "")
      .replaceAll("-", "")
      .replaceAll(":", "")
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

  if (loading) {
  }
  async function fetchImages(query: string) {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/locationImage?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      console.log(data);
      if (data.total_results == 0) {
        setImage("/bg1.jpg");
        return;
      }
      setImage(data.photos[0].src.large);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(itinerary);
    fetchImages(city);
  }, []);

  return (
    <div
      onMouseOver={() => {
        setopen(true);
      }}
      onMouseOut={() => {
        setopen(false);
      }}
    >
      <div className="relative w-85 h-100 overflow-hidden rounded-3xl bg-[#5da110]  ">
        <div className="absolute inset-0  duration-1000">
          <Image
            src={image}
            alt="Card Background"
            layout="fill"
            sizes="large"
            objectFit="cover"
            className="relative hover:h-0 transition-all"
          />
        </div>

        <div
          className={`absolute bottom-0 p-4 overflow-y-auto rounded-t-3xl ${
            open
              ? `w-85 h-100 transition-all bg-[#00000070] text-white `
              : `w-85 h-45 bg-[#00000011] text-white font-bold`
          }`}
        >
          <div className={`flex flex-col  text-white items-start px-3 gap-4`}>
            <div className={`text-2xl text-white `}>{city}</div>
            <div className="text-lg">{interests}</div>
            <div className=" w-full h-fit flex flex-row px-2 items-center justify-between text-sm">
              <div>Start Date : {travel_date}</div>
              <div>{travel_time} Days</div>
            </div>
            {open && (
              <div className="text-white text-sm w-full h-fit">
                {formatItinerary(itinerary!)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
