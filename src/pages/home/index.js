import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, ScrollTop } from './style';

class Home extends PureComponent {
    handleScroll(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="home-img" src="//upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showTop ? <ScrollTop onClick={this.handleScroll}>Top</ScrollTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showTop: state.getIn(['home', 'showTop'])
});
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.changeScroll(true));
        }else{
            dispatch(actionCreators.changeScroll(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);