import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
    render() {
        const { list, page } = this.props;
        return(
            <ListWrapper>
                {
                    list.map((item, index) => (
                        <Link key={index} to={`/detail/${item.get('id')}`}>
                            <ListItem>
                                <img className="list-pic" src={item.get("imgUrl")} alt=""/>
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="intro">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                        
                    ))
                }
                <LoadMore onClick={() => this.props.addMoreList(page)}>加载更多</LoadMore>
            </ListWrapper>
           
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'introList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    addMoreList(page){
        const action = actionCreators.clickLoadMore(page);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(List);