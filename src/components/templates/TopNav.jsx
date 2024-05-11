import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_image from "/no_image.jpeg";

function TopNav() {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const getSearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    useEffect(() => {
        getSearch();
    }, [query]);

    return (
        <div className="w-full z-10 h-[10vh] relative flex items-center justify-start ml-[20%]">
            <i className="text-3xl text-zinc-200 ri-search-2-line"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[40%] p-3 outline-none border-none text-xl bg-transparent text-zinc-600 mx-4"
                type="text"
                placeholder="Search Anything..."
            />
            {query.length > 0 && (
                <i
                    onClick={() => setQuery("")}
                    className="text-3xl text-zinc-400 ri-close-fill cursor-pointer"
                ></i>
            )}

            <div className="absolute top-[95%] left-10 w-[45%] max-h-[40vh] rounded-b-lg bg-zinc-200 overflow-auto">
                {searches.map((item, index) => (
                    <Link
                        to={`/${item.media_type}/details/${item.id}`}
                        key={index}
                        className="flex justify-start items-center p-5 text-zinc-600 font-semibold border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
                    >
                        <img
                            className="w-[10vh] h-[10vh] object-cover object-center rounded mr-5 shadow-lg"
                            src={
                                item.backdrop_path || item.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          item.backdrop_path ||
                                          item.profile_path
                                      }`
                                    : no_image
                            }
                            alt=""
                        />
                        <span>
                            {item.name ||
                                item.original_name ||
                                item.title ||
                                item.original_title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TopNav;
