import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import docs from "./docs";

export default combineReducers({ docs, visibilityFilter });