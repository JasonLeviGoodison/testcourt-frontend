import { SET_IN_REVIEW } from '../actionTypes';

const initialState = {
    inReview: false,
    reviewStartTime: null,
    reviewEndTime: null
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_IN_REVIEW: {
        const value = action.payload;
        return {
            ...state,
            inReview: value,
            reviewStartTime: Date.now()
        };
      }
      default:
        return state;
    }
}