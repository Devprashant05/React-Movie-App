import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
    return (
        <div className="flex flex-wrap w-full h-full justify-center mt-5 bg-[#1f1e24] ">
            {data.map((item, index) => (
                <Link
                    to={`/${item.media_type || title}/details/${item.id}`}
                    className="relative w-[25vh] mr-[4%] mb-[4%]"
                    key={index}
                >
                    <img
                        className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${
                            item.poster_path ||
                            item.backdrop_path ||
                            item.profile_path
                        }`}
                        alt=""
                    />
                    <h1 className="text-2xl text-center text-zinc-400 mt-3 font-semibold">
                        {item.name ||
                            item.original_name ||
                            item.title ||
                            item.original_title}
                    </h1>

                    {item.vote_average && (
                        <div className="absolute right-[-14%] bottom-[30%] text-white text-xl font-semibold flex justify-center items-center w-[7vh] h-[7vh] rounded-full bg-yellow-600">
                            {(item.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}

export default Cards;
