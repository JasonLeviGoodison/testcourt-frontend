import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import docs from "./docs";
import checkLists from "./checkLists";

export default combineReducers({ docs, visibilityFilter, checkLists });