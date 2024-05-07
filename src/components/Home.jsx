import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCard from "./templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";
import Loader from "./templates/Loader";

function Home() {
    document.title = "MovieApp | Home";
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);

    const [category, setCategory] = useState("all");

    const getWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/movie/day`);
            let randomWallpaper =
                data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomWallpaper);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/week`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    useEffect(() => {
        getTrending();
        !wallpaper && getWallpaper();
    }, [category]);

    return wallpaper && trending ? (
        <>
            <SideNav />
            <div className="w-[80%] h-full relative overflow-auto overflow-x-hidden">
                <TopNav />
                <Header data={wallpaper} />
                <div className="p-6 flex justify-between">
                    <h1 className="text-3xl  font-semibold text-zinc-400 ">
                        Trending
                    </h1>
                    <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setCategory(e.target.value)}
                    />
                </div>
                <HorizontalCard data={trending} />
            </div>
        </>
    ) : (
        <Loader />
    );
}

export default Home;
