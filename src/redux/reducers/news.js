import createReducer from '../createReducer';
import { GET_NEWS, GET_NEWS_FAIL } from '../actions/types';

export const newsState = createReducer({ lastUpdated: null, newsList: [] }, {
    [GET_NEWS](state, action) {
        return { ...state, newsList: action.newSearch ? action.news : [...state.newsList, ...action.news], error: action.error, newsLength: action.newsLength, lastUpdated: Date.now() };
    },
    [GET_NEWS_FAIL](state, action) {
        return {
            ...state,
            error: action.error

        };
    }
})