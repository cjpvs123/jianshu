import React from "react";
import {LoginWrapper,SignWrapper,Title} from "./style";
import {Link,Redirect} from "react-router-dom";
import {loginReq} from "./store/actionCreators";
import {connect} from 'react-redux'

class Sign_in extends React.Component{

    componentDidMount() {

    }

    render() {
        const {loginState,loginReq} =this.props;
        const username = React.createRef();

            if(!loginState){
                return (
                    <LoginWrapper>
                        <Link to='/'>
                            <div className='img' >
                                <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="" />
                            </div>
                        </Link>
                        <SignWrapper>
                            <Title>
                                <Link to='/login/sign_in'>
                                    <p className='active' >登录</p>
                                </Link>
                                <b>·</b>
                                <Link to='/login/sign_up'>
                                    <p >注册</p>
                                </Link>

                            </Title>
                            <div className='input'>
                                <i className='iconfont'>&#xe66c;</i>
                                <input type="text" placeholder='手机号或邮箱' ref={username}/>
                            </div>
                            <div className='input' style={{borderTop:'0'}}>
                                <i className='iconfont'>&#xe61d;</i>
                                <input type="password"  placeholder='密码' ref={input=>this.password=input} />
                            </div>
                            <button
                                className='sign_in'
                                onClick={()=>loginReq(username.current.value,this.password.value)}>登录</button>
                        </SignWrapper>
                    </LoginWrapper>
                )
            }
            else {
                return <Redirect  to='/'/>
            }


    }
}
const mapStateToProps = (state)=>{
    return{
        loginState:state.getIn(['login','loginState'])
    }
}
export default connect(mapStateToProps,{loginReq})(Sign_in)
