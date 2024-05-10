import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";
import axios from "../utils/axios";

function People() {
    document.title = "MovieApp | People";
    const navigate = useNavigate();
    const [people, setPeople] = useState([]);
    const [category, setCategory] = useState("popular");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPeople = async () => {
        try {
            const { data } = await axios.get(
                `/person/${category}?page=${page}`
            );
            // setTrending(data.results);
            if (data.results.length > 0) {
                setPeople((prev) => [...prev, ...data.results]);
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
        if (people.length === 0) {
            getPeople();
        } else {
            setPage(1);
            setPeople([]);
            getPeople();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return people.length > 0 ? (
        <div className="w-full h-screen ">
            <div className="px-[5%] w-full flex items-center justify-center ">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"
                    ></i>
                    People
                </h1>

                <TopNav />
            </div>

            <InfiniteScroll
                dataLength={people.length}
                next={getPeople}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={people} title="people" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
}

export default People;
