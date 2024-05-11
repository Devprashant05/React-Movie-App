import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Loader from "./components/templates/Loader";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PeopleDetails from "./components/PeopleDetails";
import Trailer from "./components/templates/Trailer";
import Error from "./components/templates/Error";

function App() {
    return (
        <div className="w-screen h-screen bg-[#1f1e24] flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/l" element={<Loader />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/details/:id" element={<MovieDetails />}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    ></Route>
                </Route>
                <Route path="/tv" element={<TvShow />} />
                <Route path="/tv/details/:id" element={<TvDetails />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/details/:id" element={<PeopleDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
