import {LOADING_SET} from './constants';

export function setLoading(value) {
    return {
        type: LOADING_SET,
        value
    };
}