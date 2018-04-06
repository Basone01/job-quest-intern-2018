import { combineReducers } from "redux";
import jokes from "./jokes";
import name from './name'

const mainReducer = combineReducers({
    jokes,
    name
})

export default mainReducer;