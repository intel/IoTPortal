import deviceCategoryActionTypes from './deviceCategory.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceCategoriesStart = () => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_START,
});

export const fetchDeviceCategoriesSuccess = deviceCategories => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_SUCCESS,
  payload: deviceCategories
});

export const fetchDeviceCategoriesFailure = errorMessage => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_FAILURE,
  payload: errorMessage
});

export const fetchDeviceCategoriesStartAsync = () => {
  return dispatch => {
    dispatch(fetchDeviceCategoriesStart());

    axios.get(`${API_ENDPOINT}/device/categories`)
      .then(result => {
        dispatch(fetchDeviceCategoriesSuccess(result.data.result.deviceCategories));
      })
      .catch(error => {
        dispatch(fetchDeviceCategoriesFailure(error.message));
      });
  }
};
