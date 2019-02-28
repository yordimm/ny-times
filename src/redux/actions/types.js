import * as NewsActions from './news'
import * as ParamsActions from './params'

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL'

export const SAVE_PARAMS = 'SAVE_PARAMS'

export const ActionCreators = Object.assign({},
    NewsActions,
    ParamsActions
)