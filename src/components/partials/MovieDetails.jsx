import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../../store/actions/movieActions";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%] "
    >
      {/* navigation */}
      <nav className="w-full flex text-zinc-100 gap-10 text-xl h-[10vh] items-center">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* poster & deets */}

      <div className="w-full flex">
        <img
          src={`https://image.tmdb.org/t/p/original${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
          className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
        />

        <div className="content mr-10 text-zinc-">
          <h1>
            {info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}
          </h1>
        </div>
      </div>

      {/* platforms available */}

      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availale on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
      </div>

      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availale on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
      </div>

      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availale to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default MovieDetails;
