import {combineReducers} from 'redux';
import ui from './ui/reducer';
import bot from './bot/reducer';
import user from './user/reducer';
import botClient from './botClient/reducer';

const reducers = combineReducers({
    ui,
    bot,
    user,
    botClient
});

export default reducers;