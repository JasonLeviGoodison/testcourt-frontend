import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS, SUBMIT_COMMENT_SUCCESS, FETCH_REVIEW_EVENT_LOG_SUCCESS } from '../actionTypes';
import ReviewEvent from "../../api/ReviewEvent";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEW_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_REVIEW_SUCCESS: {
      const value = action.payload;
      return {
        ...state,
        ...value,
      };
    }

    case SUBMIT_COMMENT_SUCCESS: {
      const { reviewId, comment, user } = action.payload
      const copyState = { ...state };
      copyState.eventLog.push(ReviewEvent.newComment(reviewId, user, comment, new Date()))
      return copyState;
    }

    case FETCH_REVIEW_EVENT_LOG_SUCCESS: {
      const { reviewId, eventLog } = action.payload
      const copyState = { ...state };
      copyState.eventLog = ReviewEvent.batchConvert(eventLog);
      return copyState;
    }

    default:
      return state;
  }
}