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
            dispatch(uiActions.setLoading(false));
            dispatch(setResponses(response.message));
        }).catch(error => {
            dispatch(uiActions.setLoading(false));
            throw(error);
        });
    };
}

export function sendResponses(responses) {
    return (dispatch) => {
        return transport.post('/config/create', responses).then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setResponses(responses));
        }).catch(error => {
            dispatch(uiActions.setLoading(false));
            throw(error);
        });
    };
}
