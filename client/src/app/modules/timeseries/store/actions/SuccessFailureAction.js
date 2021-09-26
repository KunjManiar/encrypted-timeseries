import SuccessFailureModel from "../../models/SuccessFailureModel";
import { SUCCESS_FAILURE as SUCCESS_FAILURE_CONSTANTS } from "../../constants/TimeseriesConstants";
// import { searchLocationsAPI } from '../api/search';
// import { searchConstants } from '../../constants/weather';

export const updateSuccessFailure = ({ err, data }) => {
  return async (dispatch, getState) => {
    if (err) {
      dispatch({
        type: SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_ERROR,
        err: err,
      });
    } else {
      console.log(data);
      dispatch({
        type: SUCCESS_FAILURE_CONSTANTS.SUCCESS_FAILURE_UPDATE,
        successFailure: new SuccessFailureModel(data),
      });
    }
  };
};
