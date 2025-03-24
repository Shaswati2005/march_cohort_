import React from 'react'

import { useState } from 'react';

interface AchievementProps{
    num:number;
    sign:string;
    image:string;
    title:string;
}

const Achievement: React.FC<AchievementProps> = ({num,sign,image,title}) => {
    const [color,setcolor] = useState('[#6ba22d27]');
    const[oppcolor,setoppcolor] = useState('[#5da110]')
        const handleHoverFunction = () => {
            setcolor('[#5da110]')
            setoppcolor('[#6ba22d27]')
          
        };
      
        const handleMouseOut = () => {
            setcolor('[#6ba22d27]')
            setoppcolor('[#5da110]')
         
        };
  return (
    <div className='w-60 h-85  m-5 flex flex-col rounded-lg shadow-lg shadow-[#6ba22d27]  gap-10 items-center justify-between  pt-5 text-black ' onMouseOver={handleHoverFunction}
    onMouseOut={handleMouseOut}>
        <div className={`w-35 h-35 rounded-full bg-${color} transition-all `}>
        </div>
        <div className='flex flex-col items-center justify-between gap-2 '>
        <div className='font-extrabold text-4xl'>{num}{sign}</div>
        <div className='text-wrap w-40 text-center h-20 text-sm text-gray-700'>{title}</div>


        </div>
       
        

        
    </div>
  )
};

export default Achievement