import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../redux';

export default function configureStore(initialState) {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(reducers, initialState, middleware);

    if (module.hot) {
        module.hot.accept('../redux', () => {
            const nextReducer = require('../redux/index');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}