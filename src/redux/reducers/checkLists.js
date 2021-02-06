import {
  FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS,
  FETCH_ALL_PACKAGE_TYPES_SUCCESS,
  FETCH_ALL_COMPANY_CHECKLISTS_SUCCESS,
  DELETE_COMPANY_CHECKLIST_SUCCESS,
} from '../actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PACKAGE_TYPES_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        packageoptions: items.map((x) => x.name),
      };
    }
    case FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }
    case FETCH_ALL_COMPANY_CHECKLISTS_SUCCESS: {
      const { payload } = action;
      const newObj = {};
      for (let i = 0; i < payload.length; i += 1) {
        const { name, checklist } = payload[i];
        newObj[name] = checklist;
      }
      return {
        ...state,
        ...newObj,
      };
    }
    case DELETE_COMPANY_CHECKLIST_SUCCESS: {
      const name = action.payload;
      const copyState = { ...state };
      delete copyState[name];
      return {
        ...copyState,
      };
    }
    default:
      return state;
  }
}
