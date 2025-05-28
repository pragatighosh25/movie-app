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
      </div>
      <div>
        <div className="mt-5">
          {info.watchproviders &&
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map((w) => (
              <img
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
        </div>

        <div className="mt-5">
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((w) => (
              <img
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
        </div>

        <div className="mt-5">
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w) => (
              <img
                className="w-[7vh]  h-[7vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              ></img>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default MovieDetails;
