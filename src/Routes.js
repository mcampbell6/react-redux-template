/**
 * Created by mcampbell6 on 2/6/17.
 */
import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

//Actions
import {fetchQuestions} from './app/actions/FormActions';

//App container
import App from './app/components/App';

export default function getRoutes(store) {

    const triggerFetchFormQuestions = () => {
        store.dispatch(fetchQuestions());
    };

    return (
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={triggerFetchFormQuestions}/>
        </Router>
    );
};
