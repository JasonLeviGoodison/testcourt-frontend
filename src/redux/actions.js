import {
  SET_SELECTED,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_CHECKLIST,
  FETCH_DOCUMENTS_REQUEST,
  SET_NEW_REVIEW_FIELD,
  UPLOAD_NEW_REQUEST_FORM,
  UPLOAD_NEW_REQUEST_FORM_SUCCESS,
  SET_IN_REVIEW,
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_SUCCESS
} from "./actionTypes";

export const setSelectedDocument = index => ({
  type: SET_SELECTED,
  payload: {
    index
  }
});

export const setNewReviewField = (field, value) => ({
  type: SET_NEW_REVIEW_FIELD,
  payload: {
    field,
    value
  }
});

export const fetchDocumentsRequest = () => {
  return {
    type: FETCH_DOCUMENTS_REQUEST,
    payload: ""
  }
};

export const uploadNewRequest = () => {
  return {
    type: UPLOAD_NEW_REQUEST_FORM,
    payload: ""
  }
};

export const uploadNewRequestSuccess = () => {
  return {
    type: UPLOAD_NEW_REQUEST_FORM_SUCCESS,
    payload: ""
  }
};

export const fetchDocumentsSuccess = (items) => {
  return {
    type: FETCH_DOCUMENTS_SUCCESS,
    payload: items
  }
};

export const setInReview = (value) => {
  return {
    type: SET_IN_REVIEW,
    payload: value
  }
}

export const fetchCheckListForPacType = (pacType) => {
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

export const fetchReviewPackageRequest = () => {
  return {
    type: FETCH_REVIEW_REQUEST,
    payload: {}
  }
}

export const fetchReviewPackageSuccess = (id) => {
  return {
    type: FETCH_REVIEW_SUCCESS,
    payload: id
  }
}

//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
