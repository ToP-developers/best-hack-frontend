import {combineReducers} from 'redux';
import ui from './ui/reducer';
import bot from './bot/reducer';
import user from './user/reducer';

const reducers = combineReducers({
    ui,
    bot,
    user
});

export default reducers;