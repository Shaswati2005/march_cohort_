import React from 'react'
import Image from 'next/image';

interface hotelsProps{
    hotel:string;
    address?:string;
    price:number;
    rating:number;
    link?:string;
    picture?:string;
    
}

const Hotels:React.FC<hotelsProps> = ({hotel,address,price,rating,link,picture}) => {
  return (
    <div className='w-full lg:w-200  xl:w-300 group  h-full rounded-xl bg-[#00000000] hover:bg-[#ae742d99] flex flex-row items-center justify-start gap-5 lg:gap-10s overflow-hidden '>
        <div className='w-45 relative lg:w-60 h-full '>
          <Image src={picture||"/traveller.svg"} alt='pic' objectFit='cover' layout='fill' className='absolute '/>
        </div>
        <br />
        <div className='flex-1 h-fit flex flex-col items-start justify-center gap-2 lg:gap-4  '>
            <h1 className='text-2xl lg:text-4xl font-bold font-sans text-[#9a5e15] group-hover:text-white'>{hotel}</h1>
            {address && <h2 className='text-lg lg:text-xl text-gray-600 group-hover:text-white '>
                📍{address}

                </h2>}
                <h4 className='text-lg lg:text-xl font-bold font-sans text-[#9a5e15] group-hover:text-white'>price:Rs.{price}</h4>
                <h4 className='text-xl lg:text-2xl font-bold font-sans text-[#9a5e15] group-hover:text-white'>⭐{rating}</h4>

        </div>
        
        
        
    </div>
  )
}

export default Hotels