import  { fromJS } from 'immutable';
import * as constants from './contants';
import { contants } from '.';
const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case contants.LOGOUT:
            return state.set('login', action.value);
        default:
        return state;
    }
}