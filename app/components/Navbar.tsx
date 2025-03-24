import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-screen z-30'>
        <div className='hidden  md:flex flex-row items-center justify-between px-10 py-1 lg:h-20   bg-white inset-0  bg-opacity-50 '>
            <div>logo</div>
            <div className='flex flex-1 px-10 py-3 items-center gap-10 text-[#8bc34a]'>

                <Link href={'/'} title='home'> home</Link>
                <ul>about us</ul>
                <ul>tours</ul>
                <ul>destination</ul>
                <Link href={'/'} title='past '>past tour</Link>
                <Link href={'/'} title='updates'>updates</Link>
                <Link href={'/'} title='current'> current</Link>
            </div>
            <div className='bg-[#8bc34a] px-5 py-1 rounded-lg '>
                signin
            </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar