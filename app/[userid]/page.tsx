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
  travel_duration: string;
  itinerary: string;
}

const Page = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const params = useParams();

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
      <div className="text-center text-lg w-screen h-screen text-[#7bb471] bg-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 w-dvw h-dvh  overflow-y-auto flex flex-col justify-start mt-[5rem] items-center text-[#4db23b] bg-white ">
      <h1 className="text-2xl font-bold mb-4">
        {user?.firstName}s Itineraries
      </h1>

      {itineraries.length === 0 ? (
        <h2>No itineraries found.</h2>
      ) : (
        <div className="">
          <div className="w-fit mx-5 lg:mx-10 flex flex-row flex-wrap justify-between  gap-15 mb-20 mt-5">
            {itineraries.map((itinerary) => (
              <Info
                key={itinerary.id}
                id={itinerary.id}
                user={itinerary.user}
                city={itinerary.city}
                interests={itinerary.interests}
                travel_date={itinerary.travel_date}
                travel_time={itinerary.travel_duration}
                itinerary={itinerary.itinerary}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
