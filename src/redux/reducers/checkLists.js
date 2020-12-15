import { FETCH_CHECKLIST } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHECKLIST: {
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
