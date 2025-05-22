import React from 'react'
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
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300" >
        <i class="ri-fire-fill"></i> Trending</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i class="ri-bard-fill mr-2"></i>Popular</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i class=" mr-2 ri-movie-2-fill"></i>Movies</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i class="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
        <Link className="hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300">
        <i class="mr-2 ri-team-fill"></i>People</Link>
      </nav>
      
    </div>
  )
}

export default Sidenav
