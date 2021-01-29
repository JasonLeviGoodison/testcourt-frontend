import * as docApi from '../api/documentApi';
//import * as newRequestApi from '../api/newRequestApi';
import * as checklistApi from '../api/checklistApi';
import { enqueueSnackbar, submitCommentRequest, submitCommentSuccess, fetchReviewEventLogRequest } from './actions';
import {
    fetchDocumentsRequest,
    fetchDocumentsSuccess,
    uploadNewRequest,
    uploadNewRequestSuccess,
    fetchReviewPackageRequest,
    fetchReviewPackageSuccess,
    fetchAllPackageTypesRequest,
    fetchAllPackageTypesSuccess,
    fetchCheckListForPacTypeRequest,
    fetchCheckListForPacTypeSuccess,
    submitVerdictRequest,
    submitVerdictSuccess,
    fetchReviewEventLogSuccess
} from './actions';


export const fetchDocsListThunk = () => {
    return dispatch => {
        dispatch(fetchDocumentsRequest());

        docApi.GetAllDocs()
        .then(res =>
        {
            dispatch(fetchDocumentsSuccess(res));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Error - Couldn\'t connect to server. Check your internet connection',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}

export const fetchPackageReviewById = (id) => {
    return dispatch => {
        dispatch(fetchReviewPackageRequest());

        docApi.GetReviewPackageById(id)
        .then(res =>
        {
            dispatch(fetchReviewPackageSuccess(res));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Couldn\'t get this package from the server. Check your internet connection',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}

// export const uploadNewRequestThunk = (form) => {
//     return dispatch => {
//         dispatch(uploadNewRequest());

//         newRequestApi.UploadNewRequestForm()
//         .then(res =>
//         {
//             dispatch(/*(res)*/);
//         })
//         .then(() => newRequestApi.UploadNewRequestFiles())
//         .catch(err =>
//         {
//             console.log("DIDNT GET A SUCCESS", err)
//             //dispatch(fetchDocumentsFailure());
//         })
//     }
// }

export const fetchChecklistForPacType = (pacType) => {
    return dispatch => {
        dispatch(fetchCheckListForPacTypeRequest(pacType));

        checklistApi.GetChecklist(pacType)
        .then(res =>
            {
                dispatch(fetchCheckListForPacTypeSuccess({[pacType]: res}));
            })
            .catch(err =>
            {
                console.error(err);
                dispatch(
                    enqueueSnackbar({
                        message: 'Couldn\'t connect to the server. Check your internet connection',
                        options: {
                            variant: 'error',
                        },
                }));
            })
    }
}

export const getAllPackageTypes = (form) => {
    return dispatch => {
        dispatch(fetchAllPackageTypesRequest());

        checklistApi.GetAllPackageTypes()
        .then(res =>
        {
            dispatch(fetchAllPackageTypesSuccess(res));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Couldn\'t connect to the server. Check your internet connection',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}

export const submitVerdict = (id, status) => {
    return dispatch => {
        dispatch(submitVerdictRequest());

        docApi.SubmitVerdict(id, status)
        .then(res =>
        {
            dispatch(
                enqueueSnackbar({
                    message: 'Successfully submitted status',
                    options: {
                        variant: 'success',
                    },
            }));

            dispatch(submitVerdictSuccess(res));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Error submitting status',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}

export const addCommentToReview = (reviewId, comment) => {
    return dispatch => {
        dispatch(submitCommentRequest());

        docApi.LeaveComment(reviewId, comment)
        .then(res =>
        {
            dispatch(submitCommentSuccess(reviewId, res.user, comment));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Error submitting comment',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}

export const fetchEventLogForId = (reviewId) => {
    return dispatch => {
        dispatch(fetchReviewEventLogRequest());

        docApi.GetEvents(reviewId)
        .then(eventLog =>
        {
            dispatch(fetchReviewEventLogSuccess(reviewId, eventLog));
        })
        .catch(err =>
        {
            console.error(err);
            dispatch(
                enqueueSnackbar({
                    message: 'Couldn\'t get comments',
                    options: {
                        variant: 'error',
                    },
            }));
        })
    }
}
