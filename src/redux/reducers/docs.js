import {
  FETCH_DOCUMENTS_SUCCESS,
  SET_SELECTED,
  SET_REVIEW_FILTER,
  SET_CUR_DOC_FIELD,
  REQUEST_DELETE_KEY_SUCCESS,
  FETCH_REVIEW_SUCCESS,
  SUBMIT_VERDICT_SUCCESS,
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
    case REQUEST_DELETE_KEY_SUCCESS: {
      const { key, id } = action.payload;
      let position = -1;
      for (let i = 0; i < state.documents.length; i += 1) {
        if (state.documents[i].id === id) {
          position = i;
          break;
        }
      }
      const newState = { ...state };
      newState.documents[position].keys = newState.documents[position]
        .keys
        .filter((x) => x !== key);

      return {
        ...newState,
      };
    }
    case FETCH_REVIEW_SUCCESS: {
      const { review, id } = action.payload;

      let position = -1;
      const length = state.documents ? state.documents.length : 0;
      for (let i = 0; i < length; i += 1) {
        if (state.documents[i].id === id) {
          position = i;
          break;
        }
      }
      const newState = { ...state };
      if (position === -1) {
        newState.documents = [];
        newState.documents.push(review);
      } else {
        newState.documents[position] = review;
      }

      return {
        ...newState,
      };
    }

    case SUBMIT_VERDICT_SUCCESS: {
      const { status, id } = action.payload;

      let position = -1;
      const length = state.documents ? state.documents.length : 0;
      for (let i = 0; i < length; i += 1) {
        if (state.documents[i].id === id) {
          position = i;
          break;
        }
      }

      const newState = { ...state };
      newState.documents[position].status = status;

      return {
        ...newState,
      };
    }
    default:
      return state;
  }
}
