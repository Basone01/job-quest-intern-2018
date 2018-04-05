import { combineReducers } from "redux";
import jokes from "./jokes";

const mainReducer = combineReducers({
    jokes
})

export default mainReducer;