import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../../store/actions/movieActions";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-[150vh] px-[10%] "
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
          className="h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black text-white">
            {info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}

            <span className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="flex text-zinc-100 items-center gap-x-5 mt-3 mb-5">
            {info.detail.vote_average && (
              <div className=" rounded-full text-xl font-semibold bg-yellow-500 text-white w-[5vh] flex justify-center items-center h-[5vh]">
                {(info.detail.vote_average * 10).toFixed()}
                <span>%</span>
              </div>
            )}
            <h1 className="text-2xl leading-6 font-semibold w-[60px]">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-2xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl mt-5 mb-3 text-white">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-xl mt-5 mb-3 text-white">Also in: </h1>
          <p className="mb-8">{info.translations.join(", ")}</p>

          <Link
            to={`${pathname}/trailer`}
            className="p-4 text-white rounded bg-[#6556cd] mt-5"
          >
            <i className="text xl mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
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

      {/* platforms available */}
      {info.similar.length > 0 || info.recommendations.length > 0 ? (
        <>
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <h1 className="text-3xl font-bold  text-white">
            Similar Recommendations
          </h1>
          <HorizontalCards
            data={info.similar.length > 0 ? info.similar : info.recommendations}
            mediaType="movie"
          ></HorizontalCards>
        </>
      ) : (
        <></>
      )}
      <Outlet />
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default MovieDetails;
