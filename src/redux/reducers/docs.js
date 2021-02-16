import {
  FETCH_DOCUMENTS_SUCCESS,
  SET_SELECTED,
  SET_REVIEW_FILTER,
  SET_CUR_DOC_FIELD,
} from '../actionTypes';
import Status from '../../components/Status/Status';

const initialState = {
  reviewFilter: Status.WAITING,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED: {
      const { index } = action.payload;
      return {
        ...state,
        curDoc: index,
      };
    }
    case FETCH_DOCUMENTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        documents: payload,
      };
    }
    case SET_REVIEW_FILTER: {
      const filter = action.payload;
      return {
        ...state,
        reviewFilter: filter,
      };
    }
    case SET_CUR_DOC_FIELD: {
      const { field, value, id } = action.payload;
      let position = -1;
      for (let i = 0; i < state.documents.length; i += 1) {
        if (state.documents[i].id === id) {
          position = i;
          break;
        }
      }
      const newState = { ...state };
      newState.documents[position][field] = value;
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
}
