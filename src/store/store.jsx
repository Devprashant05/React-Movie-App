import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./reducers/movieSlice";
import tvSliceReducer from "./reducers/tvSlice";
import peopleSliceReducer from "./reducers/peopleSlice";

export const store = configureStore({
    reducer: {
        movieReducer: movieSliceReducer,
        tvReducer: tvSliceReducer,
        peopleReducer: peopleSliceReducer,
    },
});
