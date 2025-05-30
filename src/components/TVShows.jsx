import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios"
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Loading from './partials/Loading';

const TVShows = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTVShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title ="TF | TV " + category.toUpperCase();

  const GetTVShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if(data.results.length > 0){
      setTVShows((prevState) => [...prevState, ...data.results]);
      setPage(page+1);
      }else{
        setHasMore(false);
      }
      

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler =async() => {
    if(tvshows.length===0){
      GetTVShows();
    }else{
      setPage(1);
      setTVShows([]);
      GetTVShows();
    }
  }

  useEffect(()=>{
    refreshHandler();
  }, [category])


  return tvshows.length > 0 ? (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <div className="w-full flex items-center justify-between px-[3%] ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          {category === "airing_today" && "TV Shows Airing Today"}
          {category === "popular" && "Popular TV Shows"}
          {category === "top_rated" && "Top Rated TV Shows"}
          {category === "on_the_air" && "TV Shows on Air"}
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          <Dropdown title="Category" options={["popular", "on_the_air", "top_rated", "airing_today" ]} func={(e)=> setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          
        </div>
      </div>
      <InfiniteScroll
      dataLength={tvshows.length}
      loader={<h1>LOADING</h1>}
      next={GetTVShows}
      hasMore={hasMore}>
        <Cards data={tvshows} title="tv"></Cards>
      </InfiniteScroll>
      

    </div>
  ): (
    <Loading></Loading>)
};

export default TVShows;