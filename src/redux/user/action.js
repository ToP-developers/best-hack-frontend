import {
    USER_REGISTER, REGISTER_STATUS_SET, USER_GET,
    USER_SET, USER_LOGIN, USER_LOGOUT
} from "./constants";

import * as actions from "./action";

import transport from "../../service/transport";
import * as uiActions from "../ui/action";

export function register(data) {
    return {
        type: USER_REGISTER,
        data
    };
}

export function setRegisterStatus(status) {
    return {
        type: REGISTER_STATUS_SET,
        status
    };
}

export function getUser() {
    return {
        type: USER_GET
    };
}

export function setUser(user) {
    return {
        type: USER_SET,
        user
    };
}

export function login(login, password) {
    return {
        type: USER_LOGIN,
        login,
        password
    };
}

export function logout() {
    return {
        type: USER_LOGOUT
    };
}


export function registerUser(action) {
    const {data} = action;

    return dispatch => {
        return transport.post('/register', data).then(response => {
            dispatch(setRegisterStatus({status: "ok"}));
        }).catch(error => {
            throw(error);
        });
    };
}
/*
 export function getUser(action) {
 const {data} = action;

 return (dispatch) => {
 return transport.get('/user', data).then(response => {
 dispatch(setUser(response));
 }).catch(error => {
 throw(error);
 });
 };
 }
 */
