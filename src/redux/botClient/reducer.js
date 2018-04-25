import {SET_RESPONSES} from "./constants";

const initialState = {
    responses: [{
        url: "",
        description: []
    }]
};

export default function botClient(state = initialState, action) {
    switch (action.type) {
        case SET_RESPONSES:
            return Object.assign({}, state, {
                responses: action.responses
            });
        default:
            return state;
    }
}
