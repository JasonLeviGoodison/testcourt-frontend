import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS, SUBMIT_VERDICT_SUCCESS } from '../actionTypes';
import Status from "../../components/Status/Status";

const initialState = {
    verdictChanged: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_VERDICT_SUCCESS: {
            return {
                ...state,
                verdictChanged: true
            }
        }
      default:
        return state;
    }
}