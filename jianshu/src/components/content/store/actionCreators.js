import {reqGetItemList} from '../../../api/index';
import * as constant from './constants'
import {reqSearchItemList} from "../../../api/index";

export const getLeftItemList = (list)=>({
    type:constant.GET_LEFT_ITEM_LIST,
    list
})

export const mouseEnter =()=>({
    type:constant.MOUSE_ENTER
})
export const mouseLeave =()=>({
    type:constant.MOUSE_LEAVE
})
export const SearchList = (list) =>({
    type:constant.SEARCH_LIST,
    list
})

export const leftItemList =() =>{
    return async (dispatch)=>{
        const result =await reqGetItemList
        if(result.status=== 0){
            dispatch(getLeftItemList(result.data.list))
        }
    }
}

export const getSearchList = (searchContent) =>{
    return async (dispatch) =>{
        if(!searchContent){
            const result =await reqGetItemList
            if(result.status=== 0){
                dispatch(getLeftItemList(result.data.list))
            }
        }
        else {
            const result = await reqSearchItemList(searchContent)
            if(result.status === 0){
                const list = result.data.list
                dispatch(SearchList(list))
            }
        }
    }
}
