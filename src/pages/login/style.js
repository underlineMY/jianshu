import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 0px ;
    right: 0px;
    z-index: 0;
    bottom: 0px;
    background: #f5f5f5;
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    box-sizing: border-box;
`;
export const Input = styled.input`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    margin-top: 15px;
`;
export const Button = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    text-align: center;
`;