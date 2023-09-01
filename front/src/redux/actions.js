import axios from 'axios';

export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOGS = "GET_DOGS";

export const getDogsByName = (name) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: GET_DOGS_BY_NAME,
            payload: data
        });
    };
}

export const getDogs = () => {
    return async function (dispatch) {
        const { data } = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload: data
        });
    };
}