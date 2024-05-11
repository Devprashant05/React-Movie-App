import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function HorizontalCard({ data }) {
    return (
        <div className="w-full h-[40vh] p-5">
            <div className="w-full flex gap-5 overflow-y-hidden">
                {data.map((item, index) => (
                    <Link
                        to={`/${item.media_type}/details/${item.id}`}
                        key={index}
                        className="min-w-[30%] h-[50vh] shadow-xl bg-zinc-900 rounded-md"
                    >
                        <img
                            className="w-full h-[50%] object-fill object-top"
                            src={`https://image.tmdb.org/t/p/original/${
                                item.poster_path || item.backdrop_path
                            }`}
                            alt=""
                        />
                        <div className="text-white mt-2 p-2">
                            <h1 className="w-[80%] text-2xl font-bold">
                                {item.name ||
                                    item.original_name ||
                                    item.title ||
                                    item.original_title}
                            </h1>
                            <p className="text-base">
                                {item.overview.slice(0, 150)} ...
                                <span className="text-zinc-500 cursor-pointer">
                                    more
                                </span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HorizontalCard;
