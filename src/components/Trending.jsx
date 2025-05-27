import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);


  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(()=>{
    GetTrending();
  }, [category, duration])


  return (
    <div className="w-screen h-screen px-[3%] overflow-y-auto overflow-hidden">
      <div className="w-full flex items-center justify-between ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          <Dropdown title="Category" options={["all", "movie", "tv"]} func={(e)=> setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropdown title="Category" options={["all", "week", "day"]} func={(e)=> setDuration(e.target.value)} />
        </div>
      </div>

      <Cards data={trending} title={category}></Cards>

    </div>
  );
};

export default Trending;
