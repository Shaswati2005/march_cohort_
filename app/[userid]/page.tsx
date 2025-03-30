"use client";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import Info from "../components/Info";
import Image from "next/image";
import { Itim } from "next/font/google";
interface Itinerary {
  id: number;
  user: string;
  city: string;
  interests: string;
  travel_date: string;
  travel_duration: string;
  itinerary: string;
}

const Page = () => {
  function formatItinerary(itineraryString: string): JSX.Element[] {
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
  }

  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const params = useParams();
  const [open, setopen] = useState(false);
  const [image, setImage] = useState("/background1.jpg");

  // Json Stuff

  /*
id,user,city,interests,travelDate,travelTime,itinerary
*/
  const [id, setId] = useState(1);
  const [interests, setInterests] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [city, setCity] = useState("Delhi");

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
      setImage(data.photos[0].src.large2x);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(city);
  }, [city]);

  const userId = params.userid ? String(params.userid) : "";
  useEffect(() => {
    if (!params.userid) {
      console.error("params.slug is undefined, skipping fetch.");
      return;
    }

    const fetchItineraries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://new-ucyk.onrender.com/get_itinerary_by_user/?user_id=${userId}`
        );

        if (!response.ok) {
          return <h1>Could'nt fetch iterinaries</h1>;
        }
        const data = await response.json();
        console.log(data);

        setItineraries(data);
      } catch (err) {
        console.error("Error fetching itineraries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, [params.userid]);

  if (loading) {
    return (
      <div className="text-center text-lg w-screen h-screen text-[#c56b30] bg-white flex justify-center items-center">
        <div className="loader2"></div>
      </div>
    );
  }

  return (
    <div className="p-6 w-screen h-screen overflow-y-auto flex flex-col justify-start mt-[5rem] items-center text-[#c56b30] bg-gradient-to-tl  from-[#c38f4a4a] to-[#ffffff] relative  shadow-inner ">
      <div className="absolute inset-0 duration-1000 ">
        <Image
          src={"/background1.jpg"}
          alt="Card Background"
          layout="fill"
          sizes="large"
          objectFit="cover"
          className="relative hover:h-0 transition-all brightness-50"
        />
      </div>

      <h1 className={`${open ? `hidden` : ``}text-2xl font-bold mb-4 `}>
        {user?.firstName}s Itineraries
      </h1>

      {itineraries.length === 0 ? (
        <h2>No itineraries found.</h2>
      ) : (
        <div>
          <button
            className={`${
              open
                ? `w-screen h-screen  lg:w-[1200px] lg:h-[800px] flex flex-col items-center   overflow-auto relative border rounded-2xl `
                : `hidden`
            }`}
            onClick={() => setopen(!open)}
          >
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
            <div className="h-full absolute  bg-[#0000004a] w-full px-10 py-5 flex flex-col  items-center justify-start overflow-y-scroll text-white">
              <h1 className="text-4xl font-semibold font-serif my-2">
                Destination - {city}
              </h1>
              <hr className="w-3/4 bg-gray-500 my-5"></hr>
              <span className="flex justify-center items-center gap-4  w-full px-4">
                <h2>Starting Date - {travelDate}</h2>
                <h2>{travelTime} Days</h2>
              </span>
              <div>{interests}</div>
              <ul>{formatItinerary(itinerary)}</ul>
            </div>
          </button>
          <div
            className={`${
              !open ? `` : `hidden`
            } w-full mx-5 lg:mx-10 flex flex-row flex-wrap justify-between overflow-x-hidden gap-15 mb-20 mt-5`}
          >
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                onClick={() => {
                  setopen(!open);
                  setCity(itinerary.city);
                  setId(itinerary.id);
                  setInterests(itinerary.interests);
                  setTravelDate(itinerary.travel_date);
                  setTravelTime(itinerary.travel_duration);
                  setItinerary(itinerary.itinerary);
                }}
              >
                <Info
                  id={itinerary.id}
                  user={itinerary.user}
                  city={itinerary.city}
                  interests={itinerary.interests}
                  travel_date={itinerary.travel_date}
                  travel_time={itinerary.travel_duration}
                  itinerary={itinerary.itinerary}
                  /*
              id,user,city,interests,travelDate,travelTime,itinerary
              */
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
