import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./constants";

const initialState = {
    message: "",
    messages: [] // id, author: bool, text: string
};

export default function bot(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.concat([
                    {
                        text: action.message,
                        author: action.author
                    }
                ])
            });
        case MESSAGE_RECEIVED:
            return Object.assign({}, state, {
                messages: state.messages.concat([
                    {
                        text: action.message,
                        author: action.author
                    }
                ])
            });
        default:
            return state;
    }
}
