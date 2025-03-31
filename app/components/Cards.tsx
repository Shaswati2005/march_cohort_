"use client";

import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  title: string;
  description: string;
  image: string; // Image path
  link?: string;
}

const Cards: React.FC<CardsProps> = ({ title, description, image, link }) => {
  return (
    <div className="relative w-85 h-100 overflow-hidden rounded-xl bg-[#c56c3066] hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#c56c3066]">
      <div className="absolute inset-0 hover:scale-110 transition-all duration-1000">
        <Image
          src={image}
          alt="Card Background"
          layout="fill"
          objectFit="cover"
          className="relative hover:h-0 transition-all"
        />
      </div>

      <div className="absolute bottom-0  flex flex-col h-fit items-center justify-end text-white m-3 z-10">
        <div className="bg-white flex flex-row gap-5 text-sm text-[#d1661e] hover:bg-[#c56230d9] hover:text-white rounded-xl  p-4 h-30  ">
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-center">{description}</p>
          </div>
          <Link
            href={link || "/"}
            className="w-15 h-15 rounded-[100%] border border-white bg-[#c56c3066] "
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
