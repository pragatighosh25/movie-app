import React, { useEffect } from "react";
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

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[15%] w-screen">
      {/* navigation */}
      <nav className="w-full flex text-zinc-100 text-xl h-[10vh] items-center">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
        </Link>
      </nav>

      <div className="w-full flex flex-col ">
        {/*poster and details */}
        <div className="w-[20%] ">
          <img
            src={
              info.detail.profile_path
                ? `https://image.tmdb.org/t/p/original${info.detail.profile_path}`
                : noimage
            }
            alt=""
            className="h-[45vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full"
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
          <h1 className="">Person Details</h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
