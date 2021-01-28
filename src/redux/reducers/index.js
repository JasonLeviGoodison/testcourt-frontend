import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import docs from "./docs";
import checkLists from "./checkLists";
import newReview from "./newReview";
import review from "./review";
import notifier from "./notifier";
import general from "./general";

export default combineReducers({ docs, review, checkLists, newReview, notifier, general });