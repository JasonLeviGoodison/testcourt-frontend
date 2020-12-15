import { SET_SELECTED, FETCH_DOCUMENTS_SUCCESS, FETCH_CHECKLIST, FETCH_DOCUMENTS_REQUEST } from "./actionTypes";

export const setSelectedDocument = index => ({
  type: SET_SELECTED,
  payload: {
    index
  }
});

export const fetchDocumentsRequest = () => {
  return {
    type: FETCH_DOCUMENTS_REQUEST,
    payload: ""
  }
};

export const fetchDocumentsSuccess = (items) => {
  return {
    type: FETCH_DOCUMENTS_SUCCESS,
    payload: items
  }
};

export const fetchCheckListForDocType = (docType) => {
  return {
    type: FETCH_CHECKLIST,
    payload: {
      "Will": [
        "Names are correct",
        "Page 3 is green",
        "Address is in bold",
        "Names are correct",
        "Page 4 is green",
        "Address is in bold",
        "Amount is correct on page 1",
        "Page 5 is green",
        "name is in bold on page 10",
        "Page 6 is green",
        "Address is in bold on page 4"
    ]}
  }
};

//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
