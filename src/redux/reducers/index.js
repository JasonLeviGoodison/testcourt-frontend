import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import docs from "./docs";
import checkLists from "./checkLists";
import newReview from "./newReview";

export default combineReducers({ docs, visibilityFilter, checkLists, newReview });