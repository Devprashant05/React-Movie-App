import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Loader from "./components/templates/Loader";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import People from "./components/People";

function App() {
    return (
        <div className="w-screen h-screen bg-[#1f1e24] flex">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/l" element={<Loader />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
                <Route path="/popular" element={<Popular />}></Route>
                <Route path="/movie" element={<Movie />}></Route>
                <Route path="/tvshow" element={<TvShow />}></Route>
                <Route path="/people" element={<People />}></Route>
            </Routes>
        </div>
    );
}

export default App;
