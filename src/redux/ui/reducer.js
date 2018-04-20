import {LOADING_SET} from './constants';

const initialState = {
    isLoading: false
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case LOADING_SET:
            return Object.assign({}, state, {
                isLoading: action.value
            });
        default:
            return state;
    }
}
