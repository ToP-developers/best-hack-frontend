import {SET_RESPONSES} from "./constants";

import transport from "../../service/transport";
import * as uiActions from "../ui/action";

export function setResponses(responses) {
    return {
        type: SET_RESPONSES,
        responses
    };
}

export function getResponses() {
    return (dispatch) => {
        return transport.get('/config/get').then(response => {
            dispatch(setResponses(response.message));
            dispatch(uiActions.setLoading(false));
        }).catch(error => {
            throw(error);
        });
    };
}

export function sendResponses(responses) {
    return (dispatch) => {
        dispatch(uiActions.setLoading(true));
        return transport.post('/config/create', responses).then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setResponses(responses));
        }).catch(error => {
            dispatch(uiActions.setLoading(false));
            throw(error);
        });
    };
}
