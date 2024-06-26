import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../store/actions/tvActions";
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Loader from "./templates/Loader";
import HorizontalCard from "./templates/HorizontalCard";
import noImage from '/no_image.jpeg'

function TvDetails() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const dispatch = useDispatch();
    console.log(info);
    useEffect(() => {
        dispatch(asyncLoadTv(id));
        return () => {
            dispatch(removeTv());
        };
    }, [id]);
    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[205vh] px-[5%] relative"
        >
            {/* Part-1 Navigation */}
            <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 items-center text-2xl">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>

                <Link to={info.detail.homepage} target="_blank">
                    <i className="hover:text-[#6556CD] ri-external-link-fill"></i>
                </Link>
                <Link
                    to={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                    target="_blank"
                >
                    <i className="hover:text-[#6556CD] ri-earth-fill"></i>
                </Link>
                <Link
                    to={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
                    target="_blank"
                    className="hover:text-[#6556CD]"
                >
                    imdb
                </Link>
            </nav>

            {/* Part-2 Poster and Details */}
            <div className="w-full flex">
                <img
                    className="h-[65vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover object-center"
                    src={`https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path || item.detail.backdrop_path
                    }`}
                    alt=""
                />
                <div className="content ml-[5%] text-zinc-100">
                    <h1 className="text-4xl text-white font-bold">
                        {info.detail.name ||
                            info.detail.original_name ||
                            info.detail.title ||
                            info.detail.original_title}
                        <span className="text-2xl ml-2 font-bold text-zinc-200">
                            ({info.detail.first_air_date.split("-")[0]})
                        </span>
                    </h1>

                    <div className="flex text-zinc-100 items-center gap-x-5 mt-3 mb-3">
                        <span className=" text-white text-lg font-semibold flex justify-center items-center w-[6vh] h-[6vh] rounded-full bg-yellow-600">
                            {(info.detail.vote_average * 10).toFixed()}
                            <sup>%</sup>
                        </span>
                        <h1 className="font-semibold text-xl w-[60px] leading-6">
                            User Score
                        </h1>
                        <h1>{info.detail.first_air_date}</h1>
                        <h1>
                            {info.detail.genres
                                .map((g, i) => g.name)
                                .join(", ")}
                        </h1>
                        <h1>{info.detail.runtime} min</h1>
                    </div>

                    <h1 className="text-xl font-semibold italic text-zinc-200">
                        {info.detail.tagline}
                    </h1>

                    <h1 className="text-xl my-4 font-semibold text-zinc-100">
                        Overview :-
                    </h1>
                    <p>{info.detail.overview}</p>

                    <h1 className="text-xl my-4 font-semibold text-zinc-100">
                        Movie Translated :-
                    </h1>
                    <p className="mb-8">{info.translations.join(", ")}</p>

                    <Link
                        className="p-5 bg-[#6556Cd] rounded-lg"
                        to={`${pathname}/trailer`}
                    >
                        <i className="mr-3 ri-play-large-fill"></i>
                        Play Trailer
                    </Link>
                </div>
            </div>

            {/* Part-3 Platforms Available */}
            <div className="w-[55%] flex flex-col gap-y-5 mt-10 mb-5">
                {info.watchProviders && info.watchProviders.flatrate && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Available on Platforms :-</h1>
                        {info.watchProviders.flatrate.map((w, i) => (
                            <img
                                title={w.provider_name}
                                key={i}
                                className="w-[5vh] h-[5vh] object-cover object-center rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}

                {info.watchProviders && info.watchProviders.rent && (
                    <div className="flex gap-5 items-center text-white">
                        <h1>Available on Rent :-</h1>
                        {info.watchProviders.rent.map((w, i) => (
                            <img
                                title={w.provider_name}
                                key={i}
                                className="w-[5vh] h-[5vh] object-cover object-center rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}

                {info.watchProviders && info.watchProviders.buy && (
                    <div className="flex gap-5 items-center text-white">
                        <h1>Available to Buy :-</h1>
                        {info.watchProviders.buy.map((w, i) => (
                            <img
                                title={w.provider_name}
                                key={i}
                                className="w-[5vh] h-[5vh] object-cover object-center rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Part-5 Seasons */}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className="text-3xl font-semibold text-white">Seasons :-</h1>
            <div className="w-full flex overflow-y-hidden mt-5">
                {info.detail.seasons.length > 0 ? (
                    info.detail.seasons.map((s, i) => (
                        <div className="w-[15vw] mr-[2%]">
                            <img
                                className="h-[40vh] mr-5 min-w-[14vw] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover object-center"
                                src={s.poster_path ? `https://image.tmdb.org/t/p/original/${s.poster_path}` : noImage}
                                alt=""
                            />
                            <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">
                                {s.name}
                            </h1>
                        </div>
                    ))
                ) : (
                    <h1 className="text-3xl text-white font-black mt-5 text-center">
                        Nothing to show...
                    </h1>
                )}
            </div>

            {/* Part-4 Recommendations and Similar Stuff */}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className="text-3xl font-semibold text-white">
                Recommendations & Similar Stuff :-
            </h1>
            <HorizontalCard
                data={
                    info.recommendations.length > 0
                        ? info.recommendations
                        : info.similar
                }
            />
            <Outlet />
        </div>
    ) : (
        <Loader />
    );
}

export default TvDetails;
