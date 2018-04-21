import {ADD_MESSAGE, MESSAGE_RECEIVED} from './constants';
import transport from '../../service/transport';

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

export function sendMessage(message, user) {
    return dispatch => {
        dispatch(addMessage(message, true));

        const data = {
            message,
            token: user.token
        };

        return transport.post('/bot/message', data).then(response => {
            if (response.message.toLowerCase() !== 'not found') {
                window.open(response.message, '_blank');
                response.message = `Ваша заявка выполнена! Перенаправил на ${window.location.origin + response.message}`;
            }

            dispatch(messageReceived(response.message, false));
        }).catch(error => {
            console.log(error);
        });
    };
}
