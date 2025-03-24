'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardsProps {
  title: string;
  description: string;
  image: string; // Image path
  link:string;
}

const Cards: React.FC<CardsProps> = ({ title, description, image, link }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scale = 1.05;
    let direction = 1;

    const animate = () => {
      if (imageRef.current) {
        scale += 0.002 * direction;

        if (scale > 1.15 || scale < 1.05) {
          direction *= -1;
        }

        imageRef.current.style.transform = `scale(${scale})`;
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-85 h-100 overflow-hidden rounded-xl hover:scale-110 transition-all hover:shadow-xl hover:shadow-[#5da110]">
      <div ref={imageRef} className="absolute inset-0 transition-transform duration-1000">
        <Image src={image} alt="Card Background" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end text-white m-3 z-10">
        <div className='bg-white flex flex-row gap-5 text-sm text-[#5da110] hover:bg-[#5da110] hover:text-white rounded-xl  p-4 h-30  '>
        <div className='flex flex-col items-start justify-center'>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-center">{description}</p>
        </div>
       <Link href={link} className='w-15 h-15 rounded-full border border-white bg-[#5da110] '/>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;