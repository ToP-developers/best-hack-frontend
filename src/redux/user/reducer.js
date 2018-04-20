import {REGISTER_STATUS_SET, USER_SET, USER_LOGOUT} from "./constants";

const initialState = {
    user: undefined,
    registerStatus: undefined
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case REGISTER_STATUS_SET:
            return Object.assign({}, state, {
                registerStatus: action.status
            });
        case USER_SET:
            return Object.assign({}, state, {
                user: action.user
            });
        case USER_LOGOUT:
            return Object.assign({}, state, {
                user: undefined
            });
        default:
            return state;
    }
}
