import {combineReducers} from 'redux';
import ui from './ui';

const reducers = combineReducers({
    ui: ui.reducer
});

export default reducers;