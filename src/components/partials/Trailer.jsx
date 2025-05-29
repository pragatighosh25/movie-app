import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute top-0 left-0 z-[100] w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0, 0.9)]">
      <i
        onClick={() => navigate(-1)}
        className="hover:text-[#6556cd] ri-close-line absolute text-3xl text-white right-[5%] top-[5%]"
      ></i>
      {ytvideo ? (
        <ReactPlayer
        controls
          height={800}
          width={1600}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        ></ReactPlayer>
      ) : (
        <Error></Error>
      )}
    </div>
  );
};

export default Trailer;
