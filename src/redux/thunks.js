import { fetchDocumentsRequest, fetchDocumentsSuccess } from './actions';
import * as docApi from '../api/documentApi';

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