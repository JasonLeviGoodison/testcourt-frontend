import {
  FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS,
  FETCH_ALL_PACKAGE_TYPES_SUCCESS
} from "../actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PACKAGE_TYPES_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        packageoptions: items.map(x => x.name)
      }
    }
    case FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        ...payload
      };
    }
    default:
      return state;
  }
}
