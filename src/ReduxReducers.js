/**
 * Created by mcampbell6 on 2/8/17.
 */
import {combineReducers} from 'redux';

import formReducer from './app/reducers/FormReducer';

export default combineReducers({
    form: formReducer
})
