import axios from 'axios';
import * as  constants from './contants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logOut = () => ({
    type: constants.LOGOUT,
    value: false
});

export const login = (account, passowrd) => {
    return (dispatch) => {
        axios.get('/api/login.json?password=' + passowrd + '&account=' + account).then((res) => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin());
            }
        }).catch((err) => {
            console.log('登录出错！');
        })
    }
}