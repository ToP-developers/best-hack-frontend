import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./constants";

let nextMessageId = 0;

export const addMessage = (message, author) => ({
    type: ADD_MESSAGE,
    id: nextMessageId++,
    author,
    message
});

export const messageReceived = (message, author) => ({
    type: MESSAGE_RECEIVED,
    id: nextMessageId++,
    author,
    message
});