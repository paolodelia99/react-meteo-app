import {
    GET_CITIES,
    ADD_CITY,
    REMOVE_CITY
} from "./types";
import { v4 } from 'node-uuid';

export const addCity = (cityName, country) => dispatch => {
    const newCityFav = {
        id: v4(),
        cityName,
        country
    }

    dispatch({
        type: ADD_CITY,
        payload: newCityFav
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
