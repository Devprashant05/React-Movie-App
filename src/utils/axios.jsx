import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGRhNDk2MGIzOTc2ZGM1YWNlYzRiYWVkYmMxNGFmMSIsInN1YiI6IjY2MzRkNWM2ODEzY2I2MDEyMTg3YTg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d8fgC3iy2MMpa-9NDfKaEzabdTij3uV0XzPOXeB4tx0",
    },
});

export default instance;
