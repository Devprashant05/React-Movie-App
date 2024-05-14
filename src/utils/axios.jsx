import axios from "axios";

const auth = String(import.meta.env.VITE_TMDB);

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: auth,
    },
});

export default instance;
