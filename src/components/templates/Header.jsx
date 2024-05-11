import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.poster_path
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
        >
            <h1 className=" w-1/2 text-4xl font-bold text-white">
                {data.name ||
                    data.original_name ||
                    data.title ||
                    data.original_title}
            </h1>
            <p className="w-1/2 text-white mt-5 text-base">
                {data.overview.slice(0, 180)} ...
                <Link
                    to={`/${data.media_type}/details/${data.id}`}
                    className="text-blue-500"
                >
                    more
                </Link>
            </p>
            <p className="text-white flex gap-2 mt-3">
                <i className="text-yellow-600 ri-calendar-schedule-fill"></i>{" "}
                {data.release_date || "Coming Soon..!"}
                <i className="text-yellow-600 ri-album-fill"></i>{" "}
                {data.media_type.toUpperCase()}
            </p>
            <Link className="p-3 bg-[#6556CD] w-fit rounded-lg text-white mt-3 font-semibold">
                Watch Trailer
            </Link>
        </div>
    );
}

export default Header;
