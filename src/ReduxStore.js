/**
 * Created by mcampbell6 on 2/7/17.
 */
import {applyMiddleware, createStore, compose} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './ReduxReducers';

const middleware = applyMiddleware(thunk, logger());
export default createStore(reducer, compose(middleware));