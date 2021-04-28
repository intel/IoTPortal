import loginActionTypes from './login.types';
import { APP_URL, API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Create
// export const createDeviceStart = () => ({
//   type: loginActionTypes.CREATE_DEVICE_START,
// });
//
// export const createDeviceSuccess = () => ({
//   type: loginActionTypes.CREATE_DEVICE_SUCCESS,
// });
//
// export const createDeviceFailure = errorMessage => ({
//   type: loginActionTypes.CREATE_DEVICE_FAILURE,
//   payload: errorMessage,
// });

export const logoutStartAsync = () => {
  return dispatch => {

    axios.post(`${APP_URL}/logout`)
      .then(result => {
        // dispatch(createDeviceSuccess());
        // toastHelper.success('Device created successfully!', toastId);
        // redirectToAfterToastSuccess(history, '/devices')
      })
      .catch(error => {
        // dispatch(createDeviceFailure(error.message));
        // toastHelper.error(`Failed to create device: ${error.message}`, toastId);
      });
  };
};