import { GET_DOGS_BY_NAME , GET_DOGS} from "./actions";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [], 
    details: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            };
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload 
            };
        default:
            return state;
    }
}

export default rootReducer;