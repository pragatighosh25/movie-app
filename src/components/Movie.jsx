import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios"
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Loading from './partials/Loading';

const Movie = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title ="TF | Movie " + category.toUpperCase();

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if(data.results.length > 0){
      setMovie((prevState) => [...prevState, ...data.results]);
      setPage(page+1);
      }else{
        setHasMore(false);
      }
      

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler =async() => {
    if(movie.length===0){
      GetMovie();
    }else{
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  }

  useEffect(()=>{
    refreshHandler();
  }, [category])


  return movie.length > 0 ? (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <div className="w-full flex items-center justify-between px-[3%] ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          {category === "popular" && "Popular Movies"}
          {category === "now_playing" && "Now Playing"}
          {category === "top_rated" && "Top Rated Movies"}
          {category === "upcoming" && "Upcoming Movies"}
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          <Dropdown title="Category" options={["popular", "now_playing", "top_rated", "upcoming" ]} func={(e)=> setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          
        </div>
      </div>
      <InfiniteScroll
      dataLength={movie.length}
      loader={<h1>LOADING</h1>}
      next={GetMovie}
      hasMore={hasMore}>
        <Cards data={movie} title="movie"></Cards>
      </InfiniteScroll>
      

    </div>
  ): (
    <Loading></Loading>)
};

export default Movie