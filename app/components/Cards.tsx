'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CardsProps {
  title: string;
  description: string;
  image: string; // Image path
}

const Cards: React.FC<CardsProps> = ({ title, description, image }) => {
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
    <div className="relative w-50 h-60 overflow-hidden rounded-xl">
      <div ref={imageRef} className="absolute inset-0 transition-transform duration-1000">
        <Image src={image} alt="Card Background" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default Cards;