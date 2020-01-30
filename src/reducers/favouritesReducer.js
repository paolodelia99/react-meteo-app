import {ADD_CITY, REMOVE_CITY} from "../actions/types";

const initialState = {
    favourites: [],
    loading: true
};

export default function (state=initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_CITY:

            return {
                ...state,
                favourites: [payload, ...state.favourites],
                loading: false
            };
        case REMOVE_CITY:
            return {
                ...state,
                favourites: state.favourites.filter(fav => fav.id !== payload)
            };
        default:
            return state;
    }
}
