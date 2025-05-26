import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col p-[10%] justify-end items-start"
    >
      <h1 className="text-5xl font-black text-white">
        {data.original_title || data.title || data.original_name}
      </h1>
      {data.overview && (
        <p className="text-white w-[70%] mt-3 mb-3">
          {data.overview.slice(0, 200)}...{" "}
          <Link className="text-blue-400">more</Link>
        </p>
      )}
      <p className="text-white">
        {data.release_date && (
          <span>
            <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
            {data.release_date}
          </span>
        )}
        {data.media_type && (
          <span>
            {" "}
            <i className="text-yellow-500 ri-album-fill"></i>{" "}
            {data.media_type.toUpperCase()}{" "}
          </span>
        )}
      </p>

      <Link className="p-4 text-white rounded bg-[#6556cd]">Watch Trailer</Link>
    </div>
  );
};

export default Header;
