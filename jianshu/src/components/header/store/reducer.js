import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
})

export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.INPUT_FOCUS:
            return state.set('focused',true)
        case constants.INPUT_BLUR:
            return state.set('focused',false)
        default:
            return state
    }
}
