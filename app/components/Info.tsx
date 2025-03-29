import React, { useEffect } from "react";
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
  id,
  user,
  city,
  interests,
  travel_date,
  travel_time,
  itinerary,
}) => {
  const [open, setopen] = useState(false);
  const [image, setImage] = useState("/bg1.jpg");
  const [loading, setLoading] = useState(false);
  const handleHoverFunction = () => {
    setopen(!open);
  };

  function formatItinerary(itineraryString: string) {
    const lines = itineraryString
      .split("* ")
      .map((line) => line.trim())
      .filter((line) => line);
    let formatted = "";
    let budgetStart = false;

    lines.forEach((line) => {
      console.log(line);
      formatted += `${line}\n`;
    });
    const flines = formatted
      .split("* ")
      .map((line) => line.trim())
      .filter((line) => line);

    flines.forEach((line) => {
      console.log(line);
      formatted += `${line}\n`;
    });
    return formatted;
  }
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
      if (data.photos[0].src.large == null) {
        setImage("/bg1.jpg");
      }
      setImage(data.photos[0].src.large);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(city);
  }, []);

  const handleMouseOut = () => {
    setopen(!open);
  };
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
          <div className={`flex flex-col  text-white items-center gap-4`}>
            <div className={`text-2xl text-white `}>{city}</div>
            <div className="text-lg">{interests}</div>
            <div className=" w-full h-fit flex flex-row px-2 items-center justify-between text-sm">
              <div>Start Date : {travel_date}</div>
              <div>{travel_time} Days</div>
            </div>
            {open && (
              <p className="text-white text-sm ">
                {formatItinerary(itinerary!)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
