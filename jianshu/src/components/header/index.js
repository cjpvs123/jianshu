import React from "react";
import {HeaderWrapper,Input} from  './style'
import Logo from './nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
import {connect} from 'react-redux'
import {inputFocus,inputBlur} from './store/actionCreators'
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";
import {logoutClick} from "../../pages/login/store/actionCreators";
import memoryUtils from "../../utils/memoryUtils";
import {getLoginReq} from '../../pages/login/store/actionCreators'
import {getSearchList} from '../content/store/actionCreators'

class Header extends React.Component{

    componentWillMount() {
        const user = memoryUtils.user
        if(user){
            this.props.getLoginReq()
        }
    }
    componentDidMount() {
        this.searchContent.addEventListener('keyup', (event)=>{
            event.preventDefault()
            if(event.keyCode === 13){
                this.props.getSearchList(this.searchContent.value)
            }
        })
    }

    render() {
        const {inputFocus,inputBlur,focused,loginState,logoutClick} = this.props
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <img src={Logo} alt='简书logo'/>
                </Link>
                <div className='content_div'>
                    <div className='item_left'>
                        <Link to='/'>
                            <div style={{color:'#EA6F5A'}}>首页</div>
                        </Link>
                        <Link to='/download'>
                            <div>下载app</div>
                        </Link>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='item'
                        >
                            <Input
                                onFocus={inputFocus}
                                onBlur={inputBlur}
                                gender={focused}
                                ref={input=>this.searchContent=input}


                            />
                        </CSSTransition>
                        <i className={focused?'iconfont focused':'iconfont'}
                            onClick={()=>this.props.getSearchList(this.searchContent.value)}

                        >&#xe64d;</i>

                    </div>
                    <div className='item_right'>
                        <div><i className='iconfont'>&#xe636;</i></div>

                        {loginState?
                            (<div onClick={logoutClick} style={{cursor:'pointer'}}>退出</div>):
                            (
                                <Link to='/login/sign_in'>
                                    <div>登录</div>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className='button_div'>
                    <Link to='/login/sign_up'>
                        <button className='left'>注册</button>
                    </Link>
                    {
                         loginState?(
                             <Link to='/writing'>
                                 <button className='right'>
                                     <i className='iconfont'>&#xe616;</i>
                                     写文章
                                 </button>
                             </Link>
                         ):(<Link to='/login/sign_in'>
                             <button className='right'>
                                 <i className='iconfont'>&#xe616;</i>
                                 写文章
                             </button>
                         </Link>)
                    }


                </div>
            </HeaderWrapper>

        )
    }
}
const mapStateToProps =(state)=>{
    return{
        focused:state.getIn(['header','focused']),
        loginState:state.getIn(['login','loginState'])
    }
}

export default connect(mapStateToProps,{inputFocus,inputBlur,logoutClick,getLoginReq,getSearchList})(Header)


