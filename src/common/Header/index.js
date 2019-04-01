import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper, Logo, Nav, NavItem, InputSearch, Addition,Button, 
    InputWrapper, SearchTips, SearchTipsTitle, ChangeNext, SearchList, SearchItem
} from './style';

class Header extends Component {
    showSearchArea(){
        const { focused, list, mouseIn, pageNum, pageTotal, handleMouseEnter, handleMouseLeave, changeNextGroup } = this.props;
        const newList = list.toJS();
        const itemList = [];
        if(newList.length){
            for(let i = (pageNum - 1) * 10; i < (pageNum * 10); i++){
                if(newList[i]){
                    itemList.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>);
                }
            }
        }
        if(focused || mouseIn){
            return (
                <SearchTips onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchTipsTitle>
                        热门搜索
                        <ChangeNext onClick={() => {changeNextGroup(pageNum, pageTotal, this.spin)}}>
                            <i ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe697;</i>
                            换一批
                        </ChangeNext>
                    </SearchTipsTitle>
                    <SearchList>
                        { itemList }
                    </SearchList>
                </SearchTips>
            )
        }else{
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logOut } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem onClick={logOut} className="right">退出</NavItem> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <InputWrapper>
                        <CSSTransition timeout={200} in={focused} classNames="slide">
                            <InputSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></InputSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
                        {this.showSearchArea()}
                    </InputWrapper>
                    <Addition>
                        <Button className="writting">
                        <i className="iconfont">&#xe617;</i>
                        写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
                </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //使用redux-immutable之后
        // focused: state.get('header').get('focused')//或者
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'museIn']),
        pageNum: state.getIn(['header', 'pageNum']),
        pageTotal: state.getIn(['header', 'pageTotal']),
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getHotList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        changeNextGroup(page, total, spin){
            let spinDeg = spin.style.transform.replace(/[^0-9]/ig, '');
            if(spinDeg) {
                spinDeg = Number.parseInt(spinDeg, 10);
            }else {
                spinDeg = 0;
            }
            spin.style.transform = `rotate(${spinDeg + 360}deg)`;

            if(page < total){
                dispatch(actionCreators.changeNextGroup(page + 1));
            }else {
                dispatch(actionCreators.changeNextGroup(1));
            }
        },
        logOut() {
            dispatch(loginActionCreators.logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);