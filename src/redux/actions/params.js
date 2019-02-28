import { SAVE_PARAMS } from './types';

export function saveParams(keyword, material) {
    return async (dispatch, getState) => {
        dispatch({ type: SAVE_PARAMS, keyword, material })
    }
}