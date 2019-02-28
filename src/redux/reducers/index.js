import { combineReducers } from 'redux';
import * as newsReducer from './news';

export default combineReducers(Object.assign(
    newsReducer
))