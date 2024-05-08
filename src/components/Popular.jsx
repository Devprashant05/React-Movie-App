import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loader from "./templates/Loader";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

function Popular() {
    document.title = "MovieApp | Popular";
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(
                `/${category}/popular?page=${page}`
            );
            // setTrending(data.results);
            if (data.results.length > 0) {
                setPopular((prev) => [...prev, ...data.results]);
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
        if (popular.length === 0) {
            getPopular();
        } else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className="w-full h-screen ">
            <div className="px-[5%] w-full flex items-center justify-center ">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"
                    ></i>
                    Popular
                </h1>

                <TopNav />
                <Dropdown
                    title="Category"
                    options={["movie", "tv"]}
                    func={(e) => {
                        setCategory(e.target.value);
                    }}
                />
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
}

export default Popular;
