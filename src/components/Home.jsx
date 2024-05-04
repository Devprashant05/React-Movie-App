import React from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";

function Home() {
    document.title = "MovieApp | Home";
    return (
        <>
            <SideNav />
            <div className="w-[80%] h-full relative overflow-hidden">
                <TopNav />
            </div>
        </>
    );
}

export default Home;
