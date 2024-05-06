import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";

function Home() {
    document.title = "MovieApp | Home";
    const [wallpaper, setWallpaper] = useState(null);
    const getWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/movie/day`);
            let randomWallpaper =
                data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomWallpaper);
            console.log(wallpaper);
        } catch (error) {
            console.log("Error : " + error);
        }
    };
    useEffect(() => {
        !wallpaper && getWallpaper();
    }, []);

    return wallpaper ? (
        <>
            <SideNav />
            <div className="w-[80%] h-full relative overflow-hidden ">
                <TopNav />
                <Header data={wallpaper} />
            </div>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

export default Home;
