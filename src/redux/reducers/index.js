import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import docs from "./docs";
import checkLists from "./checkLists";
import newReview from "./newReview";
import general from "./general";

export default combineReducers({ docs, general, checkLists, newReview });