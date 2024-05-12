import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPeople, removePeople } from "../store/actions/peopleActions";
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Loader from "./templates/Loader";
import HorizontalCard from "./templates/HorizontalCard";

function PeopleDetails() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.people);
    const dispatch = useDispatch();
    console.log(info);
    useEffect(() => {
        dispatch(asyncLoadPeople(id));
        return () => {
            dispatch(removePeople());
        };
    }, [id]);

    return info ? (
        <div className="px-[5%] w-screen h-[150vh] bg-[#1f1e24]">
            {/* Part-1 Navigation */}
            <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 items-center text-2xl">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>
            </nav>
            {/* Part-2 Details */}
            <div className="w-full flex flex-col">
                {/* Part-2a left poster and details */}
                <div className="w-[20%]">
                    <img
                        className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${
                            info.detail.profile_path ||
                            info.detail.backdrop_path
                        }`}
                        alt=""
                    />
                    <hr className="mt-10 my-5 border-none h-[2px] bg-zinc-500" />
                    {/* Social Media  */}
                    <div className="text-zinc-100 flex items-center gap-x-8 text-2xl">
                        <Link
                            to={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                            target="_blank"
                        >
                            <i className="hover:text-[#6556CD] ri-earth-fill"></i>
                        </Link>
                        <Link
                            to={`https://www.facebook.com/${info.externalId.facebook_id}/`}
                            target="_blank"
                        >
                            <i className="hover:text-[#6556CD] ri-facebook-circle-fill"></i>
                        </Link>
                        <Link
                            to={`https://www.instagram.com/${info.externalId.instagram_id}/`}
                            target="_blank"
                        >
                            <i className="hover:text-[#6556CD] ri-instagram-line"></i>
                        </Link>
                        <Link
                            to={`https://twitter.com/${info.externalId.twitter_id}`}
                            target="_blank"
                        >
                            <i className="hover:text-[#6556CD] ri-twitter-x-fill"></i>
                        </Link>
                    </div>
                    {/* Personal information */}
                    <h1 className="text-xl font-semibold mt-4 text-zinc-400">
                        Personal Info :-
                    </h1>
                    <div className="flex items-center mt-2 gap-x-2">
                        <h1 className="text-lg text-zinc-400 ">Known For :-</h1>
                        <h1 className="text-lg text-zinc-400">
                            {info.detail.known_for_department}
                        </h1>
                    </div>
                    <div className="flex items-center mt-2 gap-x-2">
                        <h1 className="text-lg text-zinc-400 ">Birthday :-</h1>
                        <h1 className="text-lg text-zinc-400">
                            {info.detail.birthday}
                        </h1>
                    </div>
                    <div className="flex items-center mt-2 gap-x-2">
                        <h1 className="text-lg text-zinc-400 ">Deathday :-</h1>
                        <h1 className="text-lg text-zinc-400">
                            {info.detail.deathday
                                ? info.detail.deathday
                                : "Still Alive"}
                        </h1>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-2 gap-x-2 ">
                        <h1 className="text-lg text-zinc-400 ">
                            Place Of Birth :-
                        </h1>
                        <h1 className="text-lg text-zinc-400">
                            {info.detail.place_of_birth}
                        </h1>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-2 gap-x-2 ">
                        <h1 className="text-lg text-zinc-400 ">
                            Also Known As :-
                        </h1>
                        <h1 className="text-lg text-zinc-400">
                            {info.detail.also_known_as.join(", ")}
                        </h1>
                    </div>
                </div>
                {/* Part-2b right details and information */}
                <div className="w-[80%]"></div>
            </div>
        </div>
    ) : (
        <Loader />
    );
}

export default PeopleDetails;
