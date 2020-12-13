import { FETCH_DOCUMENTS, SET_SELECTED } from "../actionTypes";

const initialState = {
  documents: [{
    alt: "Case 1",
    primary: "Due in 1 days",
    name: "Jason Goodison",
    details: "There is some additional information here that will follow up",
    url: "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"
  }],
  curDoc: -1
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
    case FETCH_DOCUMENTS: {
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
