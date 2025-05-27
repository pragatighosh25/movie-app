
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {

  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
      <h1 className='text-2xl text-white font-bold'>
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className=''>SCSDB.</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds

        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300" >
        <i className="ri-fire-fill"></i> Trending</Link>
        <Link  to="/popular" className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i className="ri-bard-fill mr-2"></i>Popular</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i className=" mr-2 ri-movie-2-fill"></i>Movies</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i className="mr-2 ri-team-fill"></i>People</Link>
      </nav>
      <hr className='border-none h-[1px] bg-zinc-400' />

      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information

        </h1>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300" >
        <i className="mr-2 ri-information-2-fill"></i> About SCSDB</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i className="mr-2 ri-phone-fill"></i>Contact Us</Link>

      </nav>
      
    </div>
  )
}

export default Sidenav
