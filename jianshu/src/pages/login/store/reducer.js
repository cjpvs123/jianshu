import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    loginState:false
})

export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.GET_LOGIN_REQ:
            return state.set('loginState',true)
        case constants.LOGOUT:
            return state.set('loginState',false)
        default:
            return state
    }
}
