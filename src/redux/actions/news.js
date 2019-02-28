import { GET_NEWS, GET_NEWS_FAIL } from './types';
import { Services } from '../../services';

export function getNews(keyword, material, page) {
    return async (dispatch, getState) => {
        const data = await Services.searchNews(keyword, material, page)
        const { news, newsLength, error } = data;
        if (error) {
            dispatch({ type: GET_NEWS_FAIL, error })
        }
        dispatch({ type: GET_NEWS, news, newsLength, error })
    }
}