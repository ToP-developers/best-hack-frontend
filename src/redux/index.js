import {combineReducers} from 'redux';
import ui from './ui/reducer';

const reducers = combineReducers({
    ui: ui.reducer
});

export default reducers;