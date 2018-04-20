import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./constants";

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message
});

export const messageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    message
});