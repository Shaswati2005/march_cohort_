"use client";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Info from "../components/Info";

interface Itinerary {
  id: number;
  user: string;
  city: string;
  interests: string;
  travel_date: string;
  travel_time: string;
  itinerary: string;
}

const Page = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const params = useParams();
  const formatItinerary = (text: string | null | undefined) => {
    if (!text) return <p>No itinerary available</p>; // Handle null case gracefully

    return text
      .split("\n")
      .filter((line) => line.startsWith("*")) // Only keep bullet points
      .map((line, index) => (
        <li key={index}>{line.replace(/^\* /, "")}</li> // Remove '*' from start
      ));
  };
  const userId = params.userid ? String(params.userid) : "";
  useEffect(() => {
    if (!params.userid) {
      console.error("params.slug is undefined, skipping fetch.");
      return;
    }

    const fetchItineraries = async () => {
      try {
        const response = await fetch(
          `https://new-ucyk.onrender.com/get_itinerary_by_user/?user_id=${userId}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch itineraries, Status: ${response.status}`
          );
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
      <div className="text-center text-lg w-screen h-screen text-[#7bb471] bg-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 w-dvw max-h-dvh  overflow-hidden flex flex-col justify-start mt-[5rem] items-center text-[#4db23b] bg-white ">
      <h1 className="text-2xl font-bold mb-4">
        {user?.firstName}s Itineraries
      </h1>

      {itineraries.length === 0 ? (
        <h2>No itineraries found.</h2>
      ) : (
        <div className=" overflow-x-scroll ">
          <div className="w-fit mx-5 lg:mx-10 flex flex-row gap-15 mb-20 mt-5">
          {itineraries.map((itinerary) => (
            <Info id={itinerary.id} user={itinerary.user} city={itinerary.city} interests={itinerary.interests} travel_date={itinerary.travel_date} travel_time={itinerary.travel_time} itinerary={itinerary.itinerary}/>
          ))}
        </div>

        </div>
        
      )}
    </div>
  );
};

export default Page;
