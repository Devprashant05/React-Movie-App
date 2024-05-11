import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";
import axios from "../utils/axios";

function Movie() {
    document.title = "MovieApp | Movies";
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [category, setCategory] = useState("now_playing");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            // setTrending(data.results);
            if (data.results.length > 0) {
                setMovie((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            getMovie();
        } else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className="w-full h-screen ">
            <div className="px-[5%] w-full flex items-center justify-center ">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"
                    ></i>
                    Movie
                </h1>

                <TopNav />
                <Dropdown
                    title="Category"
                    options={[
                        "popular",
                        "top_rated",
                        "upcoming",
                        "now_playing",
                    ]}
                    func={(e) => {
                        setCategory(e.target.value);
                    }}
                />
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={getMovie}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
}

export default Movie;
