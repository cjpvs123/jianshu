import {fromJS} from "immutable";
import * as constant from './constants'

const defaultState =fromJS({
    list:[],
    mouseIn:false,
})

export default (state=defaultState,action)=>{
    switch (action.type) {
        case constant.GET_LEFT_ITEM_LIST:
            return state.set('list',fromJS(action.list))
        case constant.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case constant.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case constant.SEARCH_LIST:
            return state.set('list',fromJS(action.list))
        default:
            return state
    }
}
