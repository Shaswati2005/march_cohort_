import React from 'react'

import { useState } from 'react';
import Image from 'next/image';

interface AchievementProps{
    num:number;
    sign:string;
    image:string;
    title:string;
}

const Achievement: React.FC<AchievementProps> = ({num,sign,image,title}) => {
    const [color,setcolor] = useState('[#c38f4a65] ]');
    const[oppcolor,setoppcolor] = useState('[#c56c3066]')
        const handleHoverFunction = () => {
            setcolor('[#c38f4a]')
            setoppcolor('[#c56c3066]')
          
        };
      
        const handleMouseOut = () => {
            setcolor('[#c38f4a]')
            setoppcolor('[#c56c3066]')
         
        };
  return (
    <div className='w-60 h-85  m-5 flex flex-col rounded-lg shadow-lg shadow-[#c56c3066]  gap-10 items-center justify-between  pt-5 text-black hover:scale-105 transition-all ' onMouseOver={handleHoverFunction}
    onMouseOut={handleMouseOut}>
        <div className={`w-35 h-35 rounded-full hover:bg-${oppcolor} bg-${color} hover:animate-pulse transition-all flex items-center justify-center  `}>
            <Image src={image} alt='image' width={60} height={60} className="mix-blend-luminosity" />
        </div>
        <div className='flex flex-col items-center justify-between gap-2 '>
        <div className='font-extrabold text-4xl'>{num}{sign}</div>
        <div className='text-wrap w-40 text-center h-20 text-sm text-gray-700'>{title}</div>


        </div>
       
        

        
    </div>
  )
};

export default Achievement