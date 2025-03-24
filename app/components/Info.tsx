import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

interface InfoProps{
    id: number;
  user: string;
  city: string;
  interests: string;
  travel_date: string;
  travel_time: string;
  itinerary?: string;
}

const Info:React.FC<InfoProps> = ({id,user,city,interests,travel_date,travel_time,itinerary}) => {

      const [open,setopen] = useState(false)
    const handleHoverFunction = () => {
       setopen(!open);
      
    };
  
    const handleMouseOut = () => {
       setopen(!open);
     
    };
  return (
    <div onMouseOver={handleHoverFunction}
    onMouseOut={handleMouseOut}>
        <div className="relative w-85 h-100 overflow-hidden rounded-3xl bg-[#5da110]  " >
            <div className="absolute inset-0  duration-1000">
                    <Image
                      src={'/bg1.jpg'}
                      alt="Card Background"
                      layout="fill"
                      objectFit="cover"
                      className="relative hover:h-0 transition-all"
                    />
                  </div>
            

            <div className={`absolute bottom-0 p-4 overflow-y-auto rounded-t-3xl ${open ? `w-85 h-100 transition-all bg-[#5da110] text-white `:`w-85 h-45 bg-white text-[#5da110]`}`}>
                <div className={`flex flex-col  ${open? `text-white`:`text-[#5da110]`} items-start gap-4`}>
                <div className={`text-2xl ${open? `text-white`:`text-[#5da110]`} `}>{city}</div>
                <div className='text-lg'>{interests}</div>
                <div className=' w-full h-fit flex flex-row px-2 items-center justify-between text-sm'>
                    <div>{travel_date}</div>
                    <div>{travel_time}</div>
                </div>
                {(open && 
                <div className='text-white text-sm '>{itinerary}
                </div>)}

                </div>
                

            </div>
            

        </div>
    </div>
  )
}

export default Info