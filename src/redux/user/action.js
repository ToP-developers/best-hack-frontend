import {REGISTER_STATUS_SET, USER_GET, USER_LOGIN, USER_LOGOUT, USER_REGISTER, USER_SET} from './constants';


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

export function logout() {
    return {
        type: USER_LOGOUT
    };
}


export function registerUser(data) {
    return dispatch => {
        return transport.post('/register', data).then(response => {
            dispatch(setUser({username: 'test'}));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function signInUser(data) {
    return dispatch => {
        return transport.post('/signIn', data).then(response => {
            dispatch(setUser({username: 'test'}));
        }).catch(error => {
            console.log(error);
        });
    };
}