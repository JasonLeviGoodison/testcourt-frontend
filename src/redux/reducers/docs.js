import { FETCH_DOCUMENTS_SUCCESS, SET_SELECTED } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED: {
      const { index } = action.payload;
      return {
        ...state,
        curDoc: index
      };
    }
    case FETCH_DOCUMENTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        documents: payload
      };
    }
    default:
      return state;
  }
}
