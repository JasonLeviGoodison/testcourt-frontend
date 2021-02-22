import * as docApi from '../api/documentApi';
import * as newRequestApi from '../api/newRequestApi';
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
  fetchAllCompanyChecklistsSuccess,
  deleteCompanyChecklistSuccess,
  requestDeletekeySuccess,
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
      dispatch(fetchReviewPackageSuccess(res, id));
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

export const updatePackageType = (name, list) => (dispatch) => {
  checklistApi.UpdatePackageType(name, list)
    .then(() => {
      dispatch(
        enqueueSnackbar({
          message: `Successfully updated ${name}`,
          options: {
            variant: 'success',
          },
        }),
      );
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: `Couldn't update ${name}`,
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const fetchAllCompanyChecklists = () => (dispatch) => {
  checklistApi.GetAllCompanyChecklists()
    .then((res) => {
      dispatch(fetchAllCompanyChecklistsSuccess(res));
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t get checklists',
          options: {
            variant: 'error',
          },
        }),
      );
    });
};

export const deleteCompanyChecklist = (name) => (dispatch) => {
  checklistApi.DeleteCompanyChecklist(name)
    .then(() => {
      dispatch(deleteCompanyChecklistSuccess(name));
      dispatch(
        enqueueSnackbar({
          message: 'Successfully deleted checklist',
          options: {
            variant: 'success',
          },
        }),
      );
    })
    .catch(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Couldn\'t delete checklist',
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
    .then(() => {
      dispatch(
        enqueueSnackbar({
          message: 'Successfully submitted status',
          options: {
            variant: 'success',
          },
        }),
      );

      dispatch(submitVerdictSuccess(id, status));
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

export const requestDeleteKey = (key, id) => (dispatch) => newRequestApi.DeleteKey(key, id)
  .then(() => {
    dispatch(requestDeletekeySuccess(key, id));
    dispatch(
      enqueueSnackbar({
        message: 'Successfully deleted file',
        options: {
          variant: 'success',
        },
      }),
    );
  })
  .catch((err) => {
    dispatch(
      enqueueSnackbar({
        message: `Error: Failed to delete file. ${err}`,
        options: {
          variant: 'error',
        },
      }),
    );
  });

export const requestUpdateForm = (form, id) => (dispatch) => newRequestApi.UpdateForm(form, id)
  .then(() => {
    dispatch(
      enqueueSnackbar({
        message: 'Successfully updated package',
        options: {
          variant: 'success',
        },
      }),
    );
  })
  .catch((err) => {
    dispatch(
      enqueueSnackbar({
        message: `Error: ${err}`,
        options: {
          variant: 'error',
        },
      }),
    );
  });
