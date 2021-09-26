import { SUCCESS_FAILURE as SUCCESS_FAILURE_CONSTANTS } from "../../constants/TimeseriesConstants";

const initialState = {
  loading: false,
  error: false,
  successFailure: null,
};

const SuccessFailureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_FETCHED:
    case SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_UPDATE:
      return {
        ...state,
        successFailure: action.successFailure,
        loading: false,
        error: false,
      };

    case SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // return {
    // 	...state,
    // 	successFailure: action.successFailure,
    // 	loading: false,
    // 	error: false,
    // };
    default:
      return state;
  }
};

export default SuccessFailureReducer;
