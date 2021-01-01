import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS } from '../actionTypes';

const initialState = {
};

export default function(state = initialState, action) {
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
      default:
        return state;
    }
}