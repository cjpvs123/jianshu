import React from "react";
import {WrapperContent,LeftItem,ContentWrapper,Title,Desc,Img,DownloadImg,Triangle} from './style'
import {connect} from 'react-redux'
import {leftItemList,mouseEnter,mouseLeave} from './store/actionCreators'
import {Link} from "react-router-dom";

class Content extends React.Component{
    componentDidMount() {
        this.props.leftItemList()
    }

    render() {
        
        const {mouseEnter,mouseLeave,mouseIn,list}=this.props
        return(
            <WrapperContent>
                <div className='leftContent'>
                    <LeftItem>
                        {
                            list.map((item)=>{
                               return(
                                   <ContentWrapper key={item.get('_id')}>
                                       <div>
                                           <Link to={'/detail/'+item.get('_id')}>
                                               <Title>{item.get('title')}</Title>
                                           </Link>
                                           <Desc>{item.get('desc')}</Desc>
                                       </div>
                                       <Link to={'/detail/'+item.get('_id')}>
                                           <Img src={item.get('src')} alt='' />
                                       </Link>
                                   </ContentWrapper>
                               )
                            })
                        }
                    </LeftItem>
                </div>
                <div className='rightContent'>
                    <img src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png' alt='' />
                    <img src='//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png' alt='' />
                    <img src='//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png' alt='' />
                    <img src='//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png' alt='' />
                    <div
                        className='download'
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        <img src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
                        <div>
                            <p>下载简书手机App<i className='iconfont'>&#xe600;</i></p>
                            <h1>随时随地发现和创作内容</h1>
                        </div>
                    </div>
                    <DownloadImg display={mouseIn}>
                        <img src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
                        <Triangle/>
                    </DownloadImg>
                </div>
            </WrapperContent>
        )
    }
}
const mapStateToProps= (state) =>{
    return{
        list:state.getIn(['content','list']),
        mouseIn:state.getIn(['content','mouseIn'])
    }
}
export default connect(mapStateToProps,{leftItemList,mouseEnter,mouseLeave})(Content)
