import React from "react";
import error from "/404.gif";

function Error() {
    return (
        <div className="w-full h-full bg-[#1F1E24] flex justify-center items-center">
            <img
                className="h-52 w-52 object-contain object-center"
                src={error}
                alt=""
            />
        </div>
    );
}

export default Error;
