import React from "react";
import Header from "../../components/header";
import {DetailWrapper,ContentWrapper,AsideWrapper,Title} from './style';
import {connect} from 'react-redux';
import {detailList} from './store/actionCreators'

class Detail extends React.Component{
    componentDidMount() {
        this.props.detailList(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <Header/>
                <DetailWrapper>
                    <ContentWrapper>
                        <Title>{this.props.title}</Title>
                        <div dangerouslySetInnerHTML={{__html:this.props.content}}/>
                    </ContentWrapper>
                    <AsideWrapper>11</AsideWrapper>
                </DetailWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}
export default connect(mapStateToProps,{detailList})(Detail)
