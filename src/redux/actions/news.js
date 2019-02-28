import { GET_NEWS, GET_NEWS_FAIL } from './types';
import { Services } from '../../services';

export function getNews(keyword, material, page, newSearch) {
    return async (dispatch, getState) => {
        const data = await Services.searchNews(keyword, material, page)
        console.log(data)
        const { news, newsLength, error } = data;
        if (error) {
            dispatch({ type: GET_NEWS_FAIL, error })
        }
        dispatch({ type: GET_NEWS, news, newsLength, error, newSearch })
    }
}