import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen p-[3%]">
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
          <Dropdown title="Category" options={["all", "movie", "tv"]} func="" />
          <div className="w-[2%]"></div>
          <Dropdown title="Category" options={["all", "week", "day"]} func="" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
