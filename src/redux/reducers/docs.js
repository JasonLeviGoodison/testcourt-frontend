import { FETCH_DOCUMENTS_SUCCESS, SET_SELECTED, SET_REVIEW_FILTER } from "../actionTypes";
import Status from "../../components/Status/Status";

const initialState = {
  reviewFilter: Status.WAITING
};

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
    case SET_REVIEW_FILTER: {
      const filter = action.payload;
      return {
        ...state,
        reviewFilter: filter
      };
    }
    default:
      return state;
  }
}
