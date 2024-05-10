import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";
import axios from "../utils/axios";

function TvShow() {
    document.title = "MovieApp | Tv-Shows";
    const navigate = useNavigate();
    const [tvShow, setTvShow] = useState([]);
    const [category, setCategory] = useState("airing_today");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTvShow = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            // setTrending(data.results);
            if (data.results.length > 0) {
                setTvShow((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            console.log(data);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    const refreshHandler = () => {
        if (tvShow.length === 0) {
            getTvShow();
        } else {
            setPage(1);
            setTvShow([]);
            getTvShow();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tvShow.length > 0 ? (
        <div className="w-full h-screen ">
            <div className="px-[5%] w-full flex items-center justify-center ">
                <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] mr-1 ri-arrow-left-line"
                    ></i>
                    Tv-Shows
                </h1>
                <TopNav />
                <Dropdown
                    title="Category"
                    options={[
                        "on_the_air",
                        "popular",
                        "top_rated",
                        "airing_today",
                    ]}
                    func={(e) => {
                        setCategory(e.target.value);
                    }}
                />
            </div>

            <InfiniteScroll
                dataLength={tvShow.length}
                next={getTvShow}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={tvShow} title="tv" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
}

export default TvShow;
