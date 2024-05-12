import React from "react";
import { Link } from "react-router-dom";
import noImage from "/no_image.jpeg";

function HorizontalCard({ data }) {
    return (
        <div className="w-full h-[40vh] p-5 mb-5">
            <div className="w-full flex gap-4 overflow-y-hidden">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <Link
                            to={`/${item.media_type}/details/${item.id}`}
                            key={index}
                            className="min-w-[15%] h-[40vh] shadow-xl bg-zinc-900 rounded-md"
                        >
                            <img
                                className="w-full h-[55%] object-fill"
                                src={
                                    item.poster_path || item.backdrop_path
                                        ? `https://image.tmdb.org/t/p/original/${
                                              item.poster_path ||
                                              item.backdrop_path
                                          }`
                                        : noImage
                                }
                                alt=""
                            />
                            <div className="text-white mt-1 p-2 h-[45%] overflow-y-auto">
                                <h1 className="text-lg font-semibold">
                                    {item.name ||
                                        item.original_name ||
                                        item.title ||
                                        item.original_title}
                                </h1>
                                <p className="">
                                    {item.overview.slice(0, 150)} ...
                                    <span className="text-zinc-500 cursor-pointer">
                                        more
                                    </span>
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <h1 className="text-3xl text-white font-black mt-5 text-center">
                        Nothing to show...
                    </h1>
                )}
            </div>
        </div>
    );
}

export default HorizontalCard;
