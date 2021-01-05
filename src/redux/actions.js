import {
  SET_SELECTED,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_CHECKLIST_FOR_PACTYPE_REQUEST,
  FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS,
  FETCH_DOCUMENTS_REQUEST,
  SET_NEW_REVIEW_FIELD,
  UPLOAD_NEW_REQUEST_FORM,
  UPLOAD_NEW_REQUEST_FORM_SUCCESS,
  SET_IN_REVIEW,
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_SUCCESS,
  FETCH_ALL_PACKAGE_TYPES_REQUEST,
  FETCH_ALL_PACKAGE_TYPES_SUCCESS,
  SET_REVIEW_FILTER,
  SUBMIT_VERDICT_REQUEST,
  SUBMIT_VERDICT_SUCCESS
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

export const fetchAllPackageTypesRequest = () => {
  return {
    type: FETCH_ALL_PACKAGE_TYPES_REQUEST,
    payload: ""
  }
};

export const fetchAllPackageTypesSuccess = (items) => {
  return {
    type: FETCH_ALL_PACKAGE_TYPES_SUCCESS,
    payload: items
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

export const fetchCheckListForPacTypeRequest = (pacType) => {
  return {
    type: FETCH_CHECKLIST_FOR_PACTYPE_REQUEST,
    payload: pacType
  }
};

export const fetchCheckListForPacTypeSuccess = (items) => {
  return {
    type: FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS,
    payload: items
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

export const setReviewFilter = (status) => {
  return {
    type: SET_REVIEW_FILTER,
    payload: status
  }
}

export const submitVerdictRequest = () => {
  return {
    type: SUBMIT_VERDICT_REQUEST
  }
}

export const submitVerdictSuccess = () => {
  return {
    type: SUBMIT_VERDICT_SUCCESS
  }
}
