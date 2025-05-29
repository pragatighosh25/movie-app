import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.jpg"

const Cards = ({ data, title }) => {
  return (
    <div className="min-w-screen flex flex-wrap px-[5%] bg-[#1f1e24] min-h-screen">
      {data.map((d, i) => 
      (
        <Link to={`/${d.media_type || title }/details/${d.id}`} key={i} className="w-[18%] mr-[2%] mb-[5%]">
          <div className="w-full">
            <img
            src={d.backdrop_path || d.profile_path || d.poster_path
                ? `https://image.tmdb.org/t/p/original${
              d.poster_path || d.backdrop_path || d.profile_path
            }`: noimage}
            alt=""
            className="h-[45vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full"
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold truncate">
            {d.original_title || d.title || d.original_name}
          </h1>
          </div>

          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
