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

  const formatItinerary = (text: string | null | undefined) => {
    if (!text) return <p>No itinerary available</p>; // Handle null case gracefully

    return text
      .split("\n")
      .filter((line) => line.startsWith("*")) // Only keep bullet points
      .map((line, index) => (
        <li key={index}>{line.replace(/^\* /, "")}</li> // Remove '*' from start
      ));
  };
  if (loading) {
    return (
      <div className="relative w-85 h-100 overflow-hidden rounded-3xl bg-[#575757]"></div>
    );
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
              ? `w-85 h-100 transition-all bg-[#5da110] text-white `
              : `w-85 h-45 bg-white text-[#5da110]`
          }`}
        >
          <div
            className={`flex flex-col  ${
              open ? `text-white` : `text-[#5da110]`
            } items-center gap-4`}
          >
            <div
              className={`text-2xl ${open ? `text-white` : `text-[#5da110]`} `}
            >
              {city}
            </div>
            <div className="text-lg">{interests}</div>
            <div className=" w-full h-fit flex flex-row px-2 items-center justify-between text-sm">
              <div>{travel_date}</div>
              <div>{travel_time}</div>
            </div>
            {open && (
              <div className="text-white text-sm ">
                {formatItinerary(itinerary)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
