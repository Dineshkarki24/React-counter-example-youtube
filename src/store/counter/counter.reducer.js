import { INCREMENT_COUNTER } from "./constants";

const intialState = {
    count:0
}


export const counterReducer = (state =intialState ,action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count:action.payload
            }
    
        default:
            return state;
    }
}

