import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
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
          onClick={()=>setQuery("")}
          className="ri-close-fill text-3xl text-zinc-400"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded">
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
        <Link className="text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
