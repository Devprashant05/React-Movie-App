export { removePeople } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadPeople } from "../reducers/peopleSlice";

export const asyncLoadPeople = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(
            `/person/${id}/combined_credits`
        );
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        const theUltimatData = {
            detail: detail.data,
            externalId: externalId.data,
            combinedCredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
        };

        dispatch(loadPeople(theUltimatData));
    } catch (error) {
        console.log("Error : " + error);
    }
};
