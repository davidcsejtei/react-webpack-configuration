import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import store, { history } from './store';
import UsersPage from './users/components/UsersPage';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={UsersPage} />
        </Switch>
    </ConnectedRouter>
</Provider>, document.getElementById('#root'));
