import * as constant from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    museIn: false,
    list: [],
    pageNum: 1,
    pageTotal: 1
})

export default (state = defaultState, action )=>{
    switch (action.type) {
        case constant.SEARCH_FOCUS:
            return state.set('focused', true);
        case constant.SEARCH_BLUR:
            return state.set('focused', false);
        case constant.HOT_LIST:
            return state.merge({
                list: action.data,
                pageTotal: action.pageTotal
            });
        case constant.MOUSE_ENTER:
            return state.set('museIn', true);
        case constant.MOUSE_LEAVE:
            return state.set('museIn', false);
        case constant.CHANGE_NEXT:
            return state.set('pageNum', action.page);
        default:
            return state;
    }
}