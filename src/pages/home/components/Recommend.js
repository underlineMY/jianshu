import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendList } from '../style';



class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return(
            <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendList key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendList>
                    ))
                }
                
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState)(Recommend);