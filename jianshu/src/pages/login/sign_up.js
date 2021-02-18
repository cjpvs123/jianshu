import React from "react";
import {LoginWrapper, SignWrapper, Title} from "./style";
import {Link} from "react-router-dom";
import {registerReq} from './store/actionCreators'
import {connect} from 'react-redux'


 class Sign_up extends React.Component {
    render() {
        console.log(this.props)
        return (
            <LoginWrapper>
                <Link to='/'>
                    <div className='img'>
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                    </div>
                </Link>
                <SignWrapper>
                    <Title>
                        <Link to='/login/sign_in'>
                            <p>登录</p>
                        </Link>
                        <b>·</b>
                        <Link to='/login/sign_up'>
                            <p className='active'>注册</p>
                        </Link>
                    </Title>
                    <div className='input'>
                        <i className='iconfont'>&#xe66c;</i>
                        <input type="text" placeholder='你的昵称' ref={input => this.username = input}/>
                    </div>
                    <div className='input' style={{borderTop: '0'}}>
                        <i className='iconfont'>&#xe697;</i>
                        <input type="text" placeholder='手机号' ref={input => this.phone = input}/>
                    </div>
                    <div className='input' style={{borderTop: '0'}}>
                        <i className='iconfont'>&#xe61d;</i>
                        <input type="password" placeholder='密码' ref={input => this.password = input}/>
                    </div>
                    <button className='sign_up'
                            onClick={()=>this.props.registerReq(this.username.value, this.phone.value, this.password.value,this.props.history)}>
                        注册
                    </button>
                </SignWrapper>
            </LoginWrapper>
        )
    }
}
const mapStateToProps = () =>{
    return {

    }
}
export default connect(mapStateToProps,{registerReq})(Sign_up)

