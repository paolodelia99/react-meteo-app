import {
    GET_CITIES,
    ADD_CITY,
    REMOVE_CITY
} from "./types";

export const addCity = (newCity) => dispatch => {
    dispatch({
        type: ADD_CITY,
        payload: newCity
    })
};

export const removeCity = (id) => dispatch => {
   dispatch({
       type: REMOVE_CITY,
       payload: id
   })
};

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    }catch (err) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch {
        // ignore write errors
    }
};
