import deviceCategoryActionTypes from './deviceCategory.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';
import pluralize from 'pluralize';


// Index
export const fetchDeviceCategoriesStart = () => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_START,
});

export const fetchDeviceCategoriesSuccess = deviceCategories => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_SUCCESS,
  payload: deviceCategories,
});

export const fetchDeviceCategoriesFailure = errorMessage => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCategoriesStartAsync = lazyParams => {
  return dispatch => {
    dispatch(fetchDeviceCategoriesStart());

    axios.get(`${API_ENDPOINT}/device/categories`, {params: lazyParams})
      .then(result => {
        dispatch(fetchDeviceCategoriesSuccess(result.data.result.deviceCategories));
      })
      .catch(error => {
        dispatch(fetchDeviceCategoriesFailure(error.message));
      });
  };
};

export const setFetchDeviceCategoriesLazyParams = lazyParams => ({
  type: deviceCategoryActionTypes.SET_FETCH_DEVICE_CATEGORIES_LAZY_PARAMS,
  payload: lazyParams,
});


// Create
export const createDeviceCategoryStart = () => ({
  type: deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_START,
});

export const createDeviceCategorySuccess = () => ({
  type: deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_SUCCESS,
});

export const createDeviceCategoryFailure = errorMessage => ({
  type: deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_FAILURE,
  payload: errorMessage,
});

export const createDeviceCategoryStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createDeviceCategoryStart());

    const toastId = toastHelper.loading('Creating device category');

    axios.post(`${API_ENDPOINT}/device/categories`, data)
      .then(result => {
        dispatch(createDeviceCategorySuccess());
        toastHelper.success('Device category created successfully!', toastId);
        redirectToAfterToastSuccess(history, '/device/categories')
      })
      .catch(error => {
        dispatch(createDeviceCategoryFailure(error.message));
        toastHelper.error(`Failed to create device category: ${error.message}`, toastId);
      });
  };
};


// Read
export const fetchDeviceCategoryStart = () => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_START,
});

export const fetchDeviceCategorySuccess = deviceCategory => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_SUCCESS,
  payload: deviceCategory,
});

export const fetchDeviceCategoryFailure = errorMessage => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCategoryStartAsync = id => {
  return dispatch => {
    dispatch(fetchDeviceCategoryStart());

    axios.get(`${API_ENDPOINT}/device/categories/${id}`)
      .then(result => {
        dispatch(fetchDeviceCategorySuccess(result.data.result.deviceCategory));
      })
      .catch(error => {
        dispatch(fetchDeviceCategoryFailure(error.message));
      });
  };
};


// Update
export const updateDeviceCategoryStart = () => ({
  type: deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_START,
});

export const updateDeviceCategorySuccess = deviceCategory => ({
  type: deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_SUCCESS,
  payload: deviceCategory,
});

export const updateDeviceCategoryFailure = errorMessage => ({
  type: deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_FAILURE,
  payload: errorMessage,
});

export const updateDeviceCategoryStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateDeviceCategoryStart());

    const toastId = toastHelper.loading('Updating device category');

    axios.patch(`${API_ENDPOINT}/device/categories/${id}`, data)
      .then(result => {

        dispatch(updateDeviceCategorySuccess(result.data.result.deviceCategory));
        toastHelper.success('Device category updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/device/categories')
        }

      })
      .catch(error => {
        dispatch(updateDeviceCategoryFailure(error.message));
        toastHelper.error(`Device category update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteDeviceCategoriesStart = () => ({
  type: deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_START,
});

export const deleteDeviceCategoriesSuccess = () => ({
  type: deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_SUCCESS,
});

export const deleteDeviceCategoriesFailure = errorMessage => ({
  type: deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const deleteDeviceCategoriesStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteDeviceCategoriesStart());

    const toastId = toastHelper.loading(`Deleting device ${pluralize('category', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/device/categories`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteDeviceCategoriesSuccess());
        toastHelper.success(`Device ${pluralize('category', ids.length)} deleted successfully!`, toastId);

        console.log(history)
        if (history) {
          redirectToAfterToastSuccess(history, '/device/categories')
        } else {
          dispatch(fetchDeviceCategoriesStartAsync(getState().deviceCategory.fetchDeviceCategoriesLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteDeviceCategoriesFailure(error.message));
        toastHelper.error(`Device ${pluralize('category', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};


// Fetch dropdown options
export const fetchDeviceCategoryOptionsStart = () => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_START,
});

export const fetchDeviceCategoryOptionsSuccess = deviceCategoryOptions => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_SUCCESS,
  payload: deviceCategoryOptions,
});

export const fetchDeviceCategoryOptionsFailure = errorMessage => ({
  type: deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCategoryOptionsStartAsync = (name) => {
  return dispatch => {
    dispatch(fetchDeviceCategoryOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/device/categories/options`, {params: params})
      .then(result => {
        dispatch(fetchDeviceCategoryOptionsSuccess(result.data.result.deviceCategories));
      })
      .catch(error => {
        dispatch(fetchDeviceCategoryOptionsFailure(error.message));
      });
  };
};
