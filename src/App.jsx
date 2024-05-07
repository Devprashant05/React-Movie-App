import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Loader from "./components/templates/Loader";

function App() {
    return (
        <div className="w-screen h-screen bg-[#1f1e24] flex">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/l" element={<Loader />}></Route>
                <Route path="/trending" element={<Trending />}></Route>
            </Routes>
        </div>
    );
}

export default App;
