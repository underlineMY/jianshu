import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    topicList: [],
    introList: [],
    recommendList: [],
    writterList: [],
    articlePage: 1,
    showTop: false
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList: fromJS(action.topicList),
            introList: fromJS(action.introList),
            recommendList: fromJS(action.recommendList),
            writterList: fromJS(action.writterList)
        });
        case constants.ADD_MORE_ITEM:
        return state.merge({
            introList: state.get("introList").concat(action.articleList),
            articlePage: action.page
        });
        case constants.CHANGE_SCROLL_SHOW:
        return state.set('showTop', action.flag);
        default:
        return state;
    }
}