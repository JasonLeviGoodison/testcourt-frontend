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
  SUBMIT_VERDICT_SUCCESS,
  ENQUEUE_SNACKBAR,
  REMOVE_SNACKBAR,
  SUBMIT_COMMENT_REQUEST,
  SUBMIT_COMMENT_SUCCESS,
  FETCH_REVIEW_EVENT_LOG_REQUEST,
  FETCH_REVIEW_EVENT_LOG_SUCCESS,
  FETCH_ALL_COMPANY_CHECKLISTS_SUCCESS,
  DELETE_COMPANY_CHECKLIST_SUCCESS,
} from './actionTypes';

export const setSelectedDocument = (index) => ({
  type: SET_SELECTED,
  payload: {
    index,
  },
});

export const setNewReviewField = (field, value) => ({
  type: SET_NEW_REVIEW_FIELD,
  payload: {
    field,
    value,
  },
});

export const fetchDocumentsRequest = () => ({
  type: FETCH_DOCUMENTS_REQUEST,
  payload: '',
});

export const uploadNewRequest = () => ({
  type: UPLOAD_NEW_REQUEST_FORM,
  payload: '',
});

export const uploadNewRequestSuccess = () => ({
  type: UPLOAD_NEW_REQUEST_FORM_SUCCESS,
  payload: '',
});

export const fetchAllPackageTypesRequest = () => ({
  type: FETCH_ALL_PACKAGE_TYPES_REQUEST,
  payload: '',
});

export const fetchAllPackageTypesSuccess = (items) => ({
  type: FETCH_ALL_PACKAGE_TYPES_SUCCESS,
  payload: items,
});

export const fetchAllCompanyChecklistsSuccess = (checklistsList) => ({
  type: FETCH_ALL_COMPANY_CHECKLISTS_SUCCESS,
  payload: checklistsList,
});

export const deleteCompanyChecklistSuccess = (name) => ({
  type: DELETE_COMPANY_CHECKLIST_SUCCESS,
  payload: name,
});

export const fetchDocumentsSuccess = (items) => ({
  type: FETCH_DOCUMENTS_SUCCESS,
  payload: items,
});

export const setInReview = (value) => ({
  type: SET_IN_REVIEW,
  payload: value,
});

export const fetchCheckListForPacTypeRequest = (pacType) => ({
  type: FETCH_CHECKLIST_FOR_PACTYPE_REQUEST,
  payload: pacType,
});

export const fetchCheckListForPacTypeSuccess = (items) => ({
  type: FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS,
  payload: items,
});

export const fetchReviewPackageRequest = () => ({
  type: FETCH_REVIEW_REQUEST,
  payload: {},
});

export const fetchReviewPackageSuccess = (id) => ({
  type: FETCH_REVIEW_SUCCESS,
  payload: id,
});

export const setReviewFilter = (status) => ({
  type: SET_REVIEW_FILTER,
  payload: status,
});

export const submitVerdictRequest = () => ({
  type: SUBMIT_VERDICT_REQUEST,
});

export const submitVerdictSuccess = () => ({
  type: SUBMIT_VERDICT_SUCCESS,
});

export const enqueueSnackbar = (notification) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  },
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});

export const submitCommentRequest = () => ({
  type: SUBMIT_COMMENT_REQUEST,
});

export const submitCommentSuccess = (reviewId, user, comment) => ({
  type: SUBMIT_COMMENT_SUCCESS,
  payload: {
    reviewId,
    user,
    comment,
  },
});

export const fetchReviewEventLogRequest = () => ({
  type: FETCH_REVIEW_EVENT_LOG_REQUEST,
});

export const fetchReviewEventLogSuccess = (reviewId, eventLog) => ({
  type: FETCH_REVIEW_EVENT_LOG_SUCCESS,
  payload: {
    reviewId,
    eventLog,
  },
});
