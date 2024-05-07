import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
    return (
        <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1f1e24] ">
            {data.map((item, index) => (
                <Link className="w-[25vh] mr-[4%] mb-[4%]" key={index}>
                    <img
                        className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${
                            item.poster_path || item.backdrop_path
                        }`}
                        alt=""
                    />
                    <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">
                        {item.name ||
                            item.original_name ||
                            item.title ||
                            item.original_title}
                    </h1>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
