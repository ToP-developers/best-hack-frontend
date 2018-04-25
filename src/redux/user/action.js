import {REGISTER_STATUS_SET, USER_GET, USER_LOGIN, USER_LOGOUT, USER_REGISTER, USER_SET} from './constants';

import * as uiActions from "../ui/action";
import transport from '../../service/transport';

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

export function getUserData() {
    return dispatch => {
        dispatch(uiActions.setLoading(true));
        return transport.get('/user').catch(error => {
            console.log(error);
        }).then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setUser(response));
        });
    };
}


export function registerUser(data) {
    return dispatch => {
        dispatch(uiActions.setLoading(true));
        return transport.post('/signup', data).catch(error => {
            console.log(error);
        }).then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setUser(response));
        });
    };
}

export function signInUser(data) {
    return dispatch => {
        dispatch(uiActions.setLoading(true));
        return transport.post('/signin', data).catch(error => {
            console.log(error);
        }).then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setUser(response));
        });
    };
}

export function logout() {
    return dispatch => {
        dispatch(uiActions.setLoading(true));
        return transport.get('/logout').then(response => {
            dispatch(uiActions.setLoading(false));
            dispatch(setUser(undefined));
        });
    };
}