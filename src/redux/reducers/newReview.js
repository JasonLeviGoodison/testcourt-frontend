import { SET_NEW_REVIEW_FIELD } from '../actionTypes';

const initialState = {
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_NEW_REVIEW_FIELD: {
        const { field, value } = action.payload;
        return {
            ...state,
            [field]: value
        };
      }
      default:
        return state;
    }
}