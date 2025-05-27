import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full flex flex-wrap">
      {data.map((d, i) => (
        <Link key={i} className="w-[25vh] mr-[5%] mb-[5%] ">
          <img
            src={`https://image.tmdb.org/t/p/original${
              d.poster_path || d.backdrop_path
            }`}
            alt=""
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {d.original_title || d.title || d.original_name}
          </h1>
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
