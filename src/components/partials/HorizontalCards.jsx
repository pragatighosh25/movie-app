import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data}) => {
  console.log(data);
  return (

      
      <div className="w-full flex  overflow-y-hidden scrollbar-hidden mb-5 p-5">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] mr-5 bg-zinc-900 mb-5 ">
            <img
              className="w-full h-[45%] "
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 ">
              <h1 className="text-xl font-semibold ">
                {d.original_title || d.title || d.original_name}
              </h1>
              {d.overview && (
                <p className=" mt-3 mb-3">
                  {d.overview.slice(0, 50)}...{" "}
                  <Link className="text-zinc-500">more</Link>
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
  );
};

export default HorizontalCards;
