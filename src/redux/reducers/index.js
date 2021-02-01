import { combineReducers } from 'redux';
import docs from './docs';
import checkLists from './checkLists';
import newReview from './newReview';
import review from './review';
import notifier from './notifier';

export default combineReducers({
  docs, review, checkLists, newReview, notifier,
});
