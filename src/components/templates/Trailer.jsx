import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

function Trailer() {
    const { pathname } = useLocation();
    const Navigate = useNavigate();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytVideo = useSelector((state) => state[category].info.videos);
    console.log(ytVideo);
    return (
        <div className="absolute z-[100] bg-[rgba(0,0,0,0.9)] top-[-20%] left-0 w-full h-full flex items-center justify-center">
            <Link
                onClick={() => Navigate(-1)}
                className="top-[25%] right-[4%] text-2xl hover:text-[#6556CD] text-zinc-100 absolute ri-close-large-fill"
            ></Link>
            {ytVideo ? (
                <ReactPlayer
                    height={500}
                    width={1200}
                    url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
                />
            ) : (
                <Error />
            )}
        </div>
    );
}

export default Trailer;
