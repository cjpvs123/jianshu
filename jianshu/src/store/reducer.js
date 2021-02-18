import {combineReducers} from "redux-immutable";
import HeaderReducer from "../components/header/store";
import ContentReducer from '../components/content/store';
import DetailReducer from '../pages/detail/store'
import LoginReducer from '../pages/login/store/'
import WritingReducer from '../pages/writing/store/'

export default combineReducers({
    header:HeaderReducer,
    content:ContentReducer,
    detail:DetailReducer,
    login:LoginReducer,
    writing:WritingReducer
})
