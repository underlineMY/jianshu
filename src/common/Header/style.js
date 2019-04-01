import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    z-index: 1;
`;

export const Logo = styled.div`
    position: absolute;
    height: 56px;
    width: 100px;
    left: 0px;
    top: 0px;
    background: url(${LogoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 56px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-right: 70px;
`
export const NavItem = styled.div`
    font-size: 17px;
    color: #333;
    padding: 15px;
    line-height: 26px;
    &.left{
        float: left;
    }
    &.active{
        color: #ea6f5a;
    }
    &.right{
        float: right;
        color: #969696;
        .iconfont{
            font-size: 18px;
        }
    }
`;
export const InputSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 15px;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &slide-exit-active{
        width: 160px;
    }
`;
export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
`;
export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    border-radius: 20px;
    padding: 0 18px;
    border: 1px solid #ec6149;
    box-sizing: border-box;
    margin: 9px 20px 0 0;
    text-align: center;
    font-size: 14px;
    &.reg {
        color: #ec6149;
        width: 80px;
    }
    &.writting {
        color: #fff;
        width: 100px;
        background: #ec6149;
        .iconfont {
            margin-right: 3px;
        }
    }
`;
export const InputWrapper = styled.div`
    position: relative;
    float: left;
    >.iconfont {
        position: absolute;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        line-height: 35px;
        text-align: center;
        right: 5px;
        top: 11px;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;
export const SearchTips = styled.div`
    position: absolute;
    top: 56px;
    left: 0px;
    width: 270px;
    background: #fff;
    padding: 20px 20px 10px;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchTipsTitle = styled.div`
    font-size: 14px;
    color: #969696;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
`
export const ChangeNext = styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin {
        margin-right: 2px;
        float: left;
        transition: all .4s ease-in;
    }
`
export const SearchList = styled.div`
    overflow: hidden;
`
export const SearchItem = styled.a`
    float: left;
    padding: 0px 6px;
    hieght: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 10px;
`;
