"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div className="text-center text-lg w-screen h-screen text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 w-dvw max-h-dvh  overflow-hidden flex flex-col justify-start mt-[5rem] items-center text-white">
      <h1 className="text-2xl font-bold mb-4">User Itineraries</h1>

      {itineraries.length === 0 ? (
        <h2>No itineraries found.</h2>
      ) : (
        <ul className="space-y-4 flex-1 overflow-y-scroll py-2">
          {itineraries.map((itinerary) => (
            <li key={itinerary.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{itinerary.city}</h2>
              <h3>
                <strong>Interests:</strong> {itinerary.interests}
              </h3>
              <h3>
                <strong>Travel Date:</strong> {itinerary.travel_date}
              </h3>
              <h3>
                <strong>Travel Time:</strong> {itinerary.travel_time}
              </h3>
              <h3>
                <strong>Details:</strong>{" "}
                <ul>{formatItinerary(itinerary.itinerary)}</ul>
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
