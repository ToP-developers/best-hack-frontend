import {combineReducers} from 'redux';
import ui from './ui/reducer';
import bot from './bot/reducer';

const reducers = combineReducers({
    ui,
    bot
});

export default reducers;