import createReducer from '../createReducer';
import { SAVE_PARAMS } from '../actions/types';

export const paramsState = createReducer({ lastUpdated: null, params: {} }, {
    [SAVE_PARAMS](state, action) {
        return { ...state, currentKeyword: action.keyword, currentMaterial: action.material, lastUpdated: Date.now() };
    }
})