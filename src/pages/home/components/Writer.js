import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { WriterWrapper, WriterTitle, ChangeWritter, WriterBody, WriterItem } from '../style';

class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return(
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <ChangeWritter>
                    <i ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe697;</i>
                        换一批
                    </ChangeWritter>
                </WriterTitle>
                <WriterBody>

                    {
                        list.map(item => (
                            <WriterItem key={item.get("id")}>
                                <img className="avatar" src={item.get("avatar")} alt=""/>
                                <span className="follow">+关注</span>
                                <p className="name">{item.get("name")}</p>
                                <p className="writterInfo">{item.get("info")}</p>
                            </WriterItem>
                        ))
                    }
                    
                </WriterBody>
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writer);