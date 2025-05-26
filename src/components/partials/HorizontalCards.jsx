import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400  mb-5 font-semibold">Trending</h1>
      </div>

      <div className="w-full flex h-[40vh] overflow-y-hidden ">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] mr-5 bg-zinc-900 ">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="text-xl font-black text-white">
              {d.original_title || d.title || d.original_name}
            </h1>
            {d.overview && (
              <p className="text-white w-[70%] mt-3 mb-3">
                {d.overview.slice(0, 100)}...{" "}
                <Link className="text-blue-400">more</Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
