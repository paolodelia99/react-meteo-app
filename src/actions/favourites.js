import {
    GET_CITIES,
    ADD_CITY,
    REMOVE_CITY
} from "./types";

export const addCity = (cityname, country) => dispatch => {
    const newCityFav = {
        cityname,
        country
    }

    dispatch({
        type: GET_CITIES,
        payload: newCityFav
    })
};

export const removeCity = (cityname) => dispatch => {
   dispatch({
       type: REMOVE_CITY,
       payload: cityname
   })
};

const loadState = () => {
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

const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch {
        // ignore write errors
    }
};
