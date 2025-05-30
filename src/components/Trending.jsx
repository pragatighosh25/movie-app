import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./partials/Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title ="TF | Trending " + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if(data.results.length > 0){
      setTrending((prevState) => [...prevState, ...data.results]);
      setPage(page+1);
      }else{
        setHasMore(false);
      }
      

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler =async() => {
    if(trending.length===0){
      GetTrending();
    }else{
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  }

  useEffect(()=>{
    refreshHandler();
  }, [category, duration])


  return trending.length > 0 ? (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <div className="w-full flex items-center justify-between px-[3%] ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          <Dropdown title="Category" options={["all", "movie", "tv"]} func={(e)=> setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropdown title="Category" options={["all", "week", "day"]} func={(e)=> setDuration(e.target.value)} />
        </div>
      </div>
      <InfiniteScroll
      dataLength={trending.length}
      loader={<h1>LOADING</h1>}
      next={GetTrending}
      hasMore={hasMore}>
        <Cards data={trending} title="movie"></Cards>
      </InfiniteScroll>
      

    </div>
  ): (
    <Loading></Loading>
  )
};

export default Trending;
