import {ADD_CITY, GET_CITIES, REMOVE_CITY} from "../actions/types";

const initialState = {
    favourites: [],
    loading: true
};

export default function (state=initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CITIES:
            return{
                ...state,
                favourites: payload,
                loading: false
            };
        case ADD_CITY:
            return {
                ...state,
                favourites: [payload, ...state.post],
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
