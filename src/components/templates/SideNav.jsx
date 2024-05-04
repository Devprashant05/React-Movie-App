import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <div className="w-[20%] h-full p-10 border-r-2 border-zinc-400">
            <h1 className="text-2xl text-white font-bold flex items-center">
                <i class="ri-tv-fill text-[#6556CD] mr-2"></i>
                <span>ReactMovie</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold mt-10 mb-5">
                    New Feeds
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="ri-fire-fill mr-2"></i>Trending
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i class="ri-bard-fill mr-2"></i>Popular
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i class="ri-movie-2-fill mr-2"></i>Movies
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i class="ri-tv-2-fill mr-2"></i>TV Shows
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i class="ri-team-fill mr-2"></i> People
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400 mt-5" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold mt-8 mb-4">
                    Website Information
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="ri-information-2-fill mr-2"></i>About
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i class="ri-phone-fill mr-2"></i>Contact
                </Link>
            </nav>
        </div>
    );
}

export default SideNav;
