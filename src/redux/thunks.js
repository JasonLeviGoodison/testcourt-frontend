import * as docApi from '../api/documentApi';
// import * as newRequestApi from '../api/newRequestApi';
import * as checklistApi from '../api/checklistApi';
import {
  enqueueSnackbar, submitCommentRequest, submitCommentSuccess, fetchReviewEventLogRequest,
  fetchDocumentsRequest,
  fetchDocumentsSuccess,
  fetchReviewPackageRequest,
  fetchReviewPackageSuccess,
  fetchAllPackageTypesRequest,
  fetchAllPackageTypesSuccess,
  fetchCheckListForPacTypeRequest,
  fetchCheckListForPacTypeSuccess,
  submitVerdictRequest,
  submitVerdictSuccess,
  fetchReviewEventLogSuccess,
} from './actions';

export const fetchDocsListThunk = () => (dispatch) => {
  dispatch(fetchDocumentsRequest());

  docApi.GetAllDocs()
    .then((res) => {
      dispatch(fetchDocumentsSuccess(res));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Error - Couldn\'t connect to server. Check your internet connection',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const fetchPackageReviewById = (id) => (dispatch) => {
  dispatch(fetchReviewPackageRequest());

  docApi.GetReviewPackageById(id)
    .then((res) => {
      dispatch(fetchReviewPackageSuccess(res));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t get this package from the server. Check your internet connection',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const fetchChecklistForPacType = (pacType) => (dispatch) => {
  dispatch(fetchCheckListForPacTypeRequest(pacType));

  checklistApi.GetChecklist(pacType)
    .then((res) => {
      dispatch(fetchCheckListForPacTypeSuccess({ [pacType]: res }));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t connect to the server. Check your internet connection',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const getAllPackageTypes = () => (dispatch) => {
  dispatch(fetchAllPackageTypesRequest());

  checklistApi.GetAllPackageTypes()
    .then((res) => {
      dispatch(fetchAllPackageTypesSuccess(res));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t connect to the server. Check your internet connection',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const submitVerdict = (id, status) => (dispatch) => {
  dispatch(submitVerdictRequest());

  docApi.SubmitVerdict(id, status)
    .then((res) => {
      dispatch(
        enqueueSnackbar({
          message: 'Successfully submitted status',
          options: {
            variant: 'success',
          },
        }),
      );

      dispatch(submitVerdictSuccess(res));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Error submitting status',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const addCommentToReview = (reviewId, comment) => (dispatch) => {
  dispatch(submitCommentRequest());

  docApi.LeaveComment(reviewId, comment)
    .then((res) => {
      dispatch(submitCommentSuccess(reviewId, res.user, comment));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Error submitting comment',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const fetchEventLogForId = (reviewId) => (dispatch) => {
  dispatch(fetchReviewEventLogRequest());

  docApi.GetEvents(reviewId)
    .then((eventLog) => {
      dispatch(fetchReviewEventLogSuccess(reviewId, eventLog));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t get comments',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};
