import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import configureStore from './store/index';
import {App} from './containers/App/index.jsx';

import './scss/main.scss';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
