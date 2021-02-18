import {reqGetDetail} from "../../../api";
import * as constants from './constants'

export const getDetailList = (title,content)=>({
    type:constants.GET_DETAIL_LIST,
    title,
    content
})

export const detailList = (id)=>{
    return async (dispatch)=>{
        const result = await reqGetDetail(id);
        if(result.status===0){
            dispatch(getDetailList(result.data.title,result.data.content))
        }
    }
}
