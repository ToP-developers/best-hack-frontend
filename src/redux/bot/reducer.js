import {ADD_MESSAGE} from "./constants";
import {MESSAGE_RECEIVED} from "./constants";

const initialState = {
    message: ""
};

export function bot(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                 message: action.message
            });
        case MESSAGE_RECEIVED:
            return Object.assign({}, state, {
                message: action.message
            });
        default:
            return state;
    }
}
