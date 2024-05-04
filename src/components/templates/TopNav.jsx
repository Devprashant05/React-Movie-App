import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {
    const [query, setQuery] = useState("");

    return (
        <div className="w-full h-[10vh] relative flex items-center justify-start ml-[20%]">
            <i class="text-3xl text-zinc-200 ri-search-2-line"></i>
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
                    class="text-3xl text-zinc-400 ri-close-fill cursor-pointer"
                ></i>
            )}

            <div className="absolute top-[90%] w-[45%] max-h-[30vh] rounded-b-lg bg-zinc-200 overflow-auto">
                {/* <Link className="flex justify-start items-center p-5 text-zinc-600 font-semibold border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300">
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link> */}
            </div>
        </div>
    );
}

export default TopNav;
