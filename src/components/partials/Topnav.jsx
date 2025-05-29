import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/no-image.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  const [searches, setSearches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setSearches(data.results);
      console.log(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search anything"
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill text-3xl text-zinc-400 right-0"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] overflow-auto rounded left-[5%]">
        {searches.map((s, i) => (
          <Link
          to={s.media_type=== "person"? `/people/details/${s.id}`: `/${s.media_type}/details/${s.id}`}
            key={i}
            className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[10vh] h-[10vh] rounded object-cover mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>{s.original_title || s.title || s.original_name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
