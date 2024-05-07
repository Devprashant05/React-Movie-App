import React from "react";
import loader from "/loader.gif";

function Loader() {
    return (
        <div className="w-full h-full bg-[#1F1E24] flex justify-center items-center">
            <img
                className="h-52 w-52 object-contain object-center"
                src={loader}
                alt=""
            />
        </div>
    );
}

export default Loader;
