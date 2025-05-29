import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/no-image.jpg";

const HorizontalCards = ({ data, mediaType }) => {
  console.log(data);
  return (
    <div className="w-full flex  overflow-y-hidden scrollbar-hidden mb-5 p-5">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type || mediaType }/details/${d.id}`}
          key={i}
          className="min-w-[15%] h-[40vh]  mr-5 bg-zinc-900 mb-5 "
        >
          <img
            className="w-full h-[45%] "
            src={
              d.backdrop_path || d.profile_path || d.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.profile_path || d.poster_path
                  }`
                : noimage
            }
            alt=""
          />
          <div className="text-white p-3 h-[45%] overflow-y-auto ">
            <h1 className="text-xl font-semibold ">
              {d.title || d.original_title || d.original_name || d.name }
            </h1>
            {d.episode_count && <h1>Episodes: {d.episode_count}</h1>}
            {d.air_date && <h1>Released on: {d.air_date}</h1>}
            {d.overview && (
              <p className=" mt-3 mb-3">
                {d.overview.slice(0, 50)}...{" "}
                
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
