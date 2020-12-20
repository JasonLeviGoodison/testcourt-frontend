import * as docApi from '../api/documentApi';
import * as newRequestApi from '../api/newRequestApi';
import {
    fetchDocumentsRequest,
    fetchDocumentsSuccess,
    uploadNewRequest,
    uploadNewRequestSuccess
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

export const uploadNewRequestThunk = (form) => {
    return dispatch => {
        dispatch(uploadNewRequest());

        newRequestApi.UploadNewRequestForm()
        .then(res =>
        {
            dispatch((res));
        })
        .then(() => newRequestApi.UploadNewRequestFiles())
        .catch(err =>
        {
            console.log("DIDNT GET A SUCCESS", err)
            //dispatch(fetchDocumentsFailure());
        })
    }
}