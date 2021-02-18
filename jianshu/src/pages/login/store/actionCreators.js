import {reqLogin,reqRegister} from "../../../api";
import * as constants from './constants'
import memoryUtils from "../../../utils/memoryUtils";
import storageUtils from "../../../utils/storageUtils";


export const logout = ()=>({
    type:constants.LOGOUT
})
export const logoutClick = () =>{
    return (dispatch) =>{

        memoryUtils.user=''
        storageUtils.removeUser()
        dispatch(logout())
    }
}

export const getLoginReq = () =>({
    type:constants.GET_LOGIN_REQ
})




export const loginReq = (username,password) =>{
    return async (dispatch)=>{
        const result = await reqLogin(username,password)
        if(result.status===0){
            const user =result.data
            memoryUtils.user=user
            storageUtils.saveUser(user)
            alert('登录成功！')
            dispatch(getLoginReq())
        }
        else {
            alert('登录失败！')
        }
    }
}
export const registerReq = (username,phone,password,history) => {
    return async () =>{
        const result = await reqRegister(username,phone,password)
        if(result.status === 0) {
            alert('注册成功,即将跳转到登录页！')
            history.push('/login/sign_in')
        }
        else {
            console.log('注册失败！')
        }
    }
}
