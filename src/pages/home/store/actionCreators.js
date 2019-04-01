
import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    introList: result.articleList,
    recommendList: result.recommendList,
    writterList: result.writterList
})

const addMoreList = (result, page) => ({
    type: constants.ADD_MORE_ITEM,
    articleList: fromJS(result),
    page
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const clickLoadMore = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addMoreList(result, page+1));
        })
    }
}
export const changeScroll = (flag) => ({
    type: constants.CHANGE_SCROLL_SHOW,
    flag
})