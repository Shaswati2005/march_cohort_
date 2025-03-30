import React from "react";

type Hotel = {
  name: string;
  price: number;
  rating: number;
  website: string;
};

type Location = {
  name: string;
  hotels: Hotel[];
};

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between">
      <div>
        <h2 className="text-lg font-bold">{hotel.name}</h2>
        <p className="text-sm text-gray-600">Price: ₹{hotel.price}</p>
        <p className="text-sm text-gray-600">Rating: {hotel.rating} ⭐</p>
        <a
          href={hotel.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default HotelCard;
