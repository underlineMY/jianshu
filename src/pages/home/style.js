import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    width: 625px;
    padding: 30px 0 0 15px;
    float: left;
    .home-img {
        width: 100%;
        height: 270px;
        border-radius: 5px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
    padding-top: 30px;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding-top: 30px;
    margin-left: -18px;
    border-bottom: 1px solid #f0f0f0;
`
export const TopicItem = styled.div`
    float: left;
    color: #000;
    background: #f0f0f0;
    padding: 0 10px 0 0;
    margin-left: 18px;
    margin-bottom: 12px;
    font-size: 14px;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }

`
export const ListWrapper = styled.ul`
    margin-top: 10px;
`
export const ListItem = styled.li`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .list-pic {
        width: 150px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        position: absolute;
        top: 17px;
        right: 0;
        height: 100px;
    }
`
export const ListInfo = styled.div`
    padding-right: 165px;
    box-sizing: border-box;
    .title {
        font-weight: 700;
        font-size:18px;
        margin: 0px 0 4px;
        line-height: 1.5;
        color: #333;
    }
    .intro {
        color: #999;
        line-height: 24px;
        font-size: 13px;
        margin: 0 0 8px;
    }
`
export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`
export const RecommendList = styled.a`
    color: #333;
    height: 50px;
    width: 100%;
    display: block;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`
export const WriterWrapper = styled.div`
    margin-top: 20px;
    background: #fff;
`
export const WriterTitle = styled.div`
    text-align: left;
    font-size: 13px;
    height: 19px;
    line-height: 19px;
    color: #969696;
`
export const ChangeWritter = styled.a`
    float: right;
    .spin {
        margin-right: 3px;
    }
`
export const WriterBody = styled.ul`

`
export const WriterItem = styled.li`
    overflow: hidden;
    margin-top: 10px;
    .avatar {
        width: 48px;
        height: 48px;
        float: left;
        margin-right: 10px;
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        height: 17px;
        line-height: 17px;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    .writterInfo {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        height: 20px;
        line-height: 20px;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    cursor: pointer;
    background:#9b9b9b;
    margin: 30px 0;
    color: #fff;
    font-size: 15px;
    text-align: center;
`;
export const ScrollTop = styled.div`
    width: 60px; 
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    background: #969696;
    color: #fff;
    text-align: center;
    position: fixed;
    right: 70px;
    bottom: 100px;
    cursor: pointer;
`