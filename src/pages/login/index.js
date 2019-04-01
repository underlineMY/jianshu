import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Detail extends PureComponent {
    render(){
        const { loginStatus } = this.props; 
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input ref={(input) => this.account = input} placeholder='账号' />
                        <Input placeholder='密码' ref={(input) => this.password = input } type='password' />
                        <Button onClick={() => this.props.login(this.account, this.password) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
    login(accountEle, passwordEle){
        dispatch(actionCreators.login(accountEle.value, passwordEle.value));
    }
});
export default connect(mapState, mapDispatch)(Detail);