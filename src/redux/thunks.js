import * as docApi from '../api/documentApi';
import * as newRequestApi from '../api/newRequestApi';
import * as checklistApi from '../api/checklistApi';
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
    fetchCheckListForPacTypeSuccess
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
            console.log("DIDNT GET A SUCCESS", err)
            //dispatch(fetchDocumentsFailure());
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
            console.log("DIDNT GET A SUCCESS", err)
            //dispatch(fetchDocumentsFailure());
        })
    }
}

export const uploadNewRequestThunk = (form) => {
    return dispatch => {
        dispatch(uploadNewRequest());

        newRequestApi.UploadNewRequestForm()
        .then(res =>
        {
            dispatch(/*(res)*/);
        })
        .then(() => newRequestApi.UploadNewRequestFiles())
        .catch(err =>
        {
            console.log("DIDNT GET A SUCCESS", err)
            //dispatch(fetchDocumentsFailure());
        })
    }
}

export const fetchChecklistForPacType = (pacType) => {
    return dispatch => {
        dispatch(fetchCheckListForPacTypeRequest(pacType));

        checklistApi.GetChecklist(pacType)
        .then(res =>
            {
                console.log(res)
                dispatch(fetchCheckListForPacTypeSuccess({[pacType]: res}));
            })
            .catch(err =>
            {
                console.log("DIDNT GET A SUCCESS", err)
                //dispatch(fetchDocumentsFailure());
            })
    }
}

export const getAllPackageTypes = (form) => {
    return dispatch => {
        dispatch(fetchAllPackageTypesRequest());

        //checklist api
        checklistApi.GetAllPackageTypes()
        .then(res =>
        {
            dispatch(fetchAllPackageTypesSuccess(res));
        })
        .catch(err =>
        {
            console.log("DIDNT GET A SUCCESS", err)
            //dispatch(fetchDocumentsFailure());
        })
    }
}
