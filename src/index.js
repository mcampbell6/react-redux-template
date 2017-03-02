import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './ReduxStore';

import getRoutes from './Routes';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        { getRoutes(store) }
    </Provider>,
    document.getElementById('root')
);
