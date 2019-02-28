import { combineReducers } from 'redux';
import * as newsReducer from './news';
import * as paramsReducer from './params';

export default combineReducers(Object.assign(
    newsReducer,
    paramsReducer
))