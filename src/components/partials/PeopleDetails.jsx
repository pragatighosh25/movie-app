import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadpeople,
  removepeople,
} from "../../store/actions/peopleAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";
import noimage from "/no-image.jpg";
import Dropdown from "./Dropdown";

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen bg-[#1F1E24] h-[170vh] ">
      {/* navigation */}
      <nav className="w-full flex text-zinc-100 text-xl h-[10vh] items-center">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
        </Link>
      </nav>

      <div className="w-full flex  ">
        {/*poster and details */}
        <div className="w-[20%] ">
          <img
            src={
              info.detail.profile_path
                ? `https://image.tmdb.org/t/p/original${info.detail.profile_path}`
                : noimage
            }
            alt=""
            className="h-[35vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full"
          />

          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/*social media */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}/`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/*personal info */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Details
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-3">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-3">
            Also known as
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/*detailed info */}
        <div className="w-[80%] ml-[5%] ">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="mt-3 text-zinc-400">{info.detail.biography}</p>
          <h1 className="text-lg mt-5 text-zinc-400 font-semibold">
            Casted in
          </h1>
          <HorizontalCards data={info.combinedcredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-xl mt-5 text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] overflow-y-auto overflow-x-hidden mt-5 shadow-lg shadow-[rgba(255, 255, 255, 0.3)] border-2 border-zinc-700 list-disc text-zinc-400 p-5">
            {info[category + "credits"]?.cast?.length > 0 ? (
              info[category + "credits"].cast.map((c, i) => (
                <li
                  key={i}
                  className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer"
                >
                  <Link to={`/${category}/details/${c.id}`}>
                    <p className="inline">
                      {c.original_title || c.name || c.original_name
                       
                        }
                    </p>
                    {c.character && (
                      <p className="block mt-2 ml-5">
                        Character name: {c.character}
                      </p>
                    )}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-zinc-500 italic">No cast info available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
