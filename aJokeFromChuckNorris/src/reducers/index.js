import { combineReducers } from "redux";
import jokesReducer from "./jokes";
import nameReducer from "./name";
import errorReducer from "./error";

const mainReducer = combineReducers({
  jokes:jokesReducer,
  name:nameReducer,
  error:errorReducer
});

export default mainReducer;
