import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}`
            );
            setTrending(data.results);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    useEffect(() => {
        getTrending();
    }, [trending, category]);

    return trending ? (
        <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto ">
            <div className="w-full flex items-center justify-center ">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"
                    ></i>
                    Trending
                </h1>

                <TopNav />
                <Dropdown
                    title="Category"
                    options={["movie", "tv", "all"]}
                    func={(e) => {
                        setCategory(e.target.value);
                    }}
                />
                <div className="w-[2%]"></div>
                <Dropdown
                    title="Duration"
                    options={["week", "day"]}
                    func={(e) => {
                        setDuration(e.target.value);
                    }}
                />
            </div>

            <Cards data={trending} />
        </div>
    ) : (
        <Loader />
    );
}

export default Trending;
