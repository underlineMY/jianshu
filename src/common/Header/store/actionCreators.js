import * as constant from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const searchList = (data) => ({
    type: constant.HOT_LIST,
    data: fromJS(data),
    pageTotal: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constant.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constant.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type: constant.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constant.MOUSE_LEAVE
})

export const changeNextGroup = (page) => ({
    type: constant.CHANGE_NEXT,
    page
})

export const getHotList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.data;
            dispatch(searchList(data));
        }).catch(() => {
            console.log('error!');
        })
    }
}