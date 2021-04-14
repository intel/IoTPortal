import deviceCategoryActionTypes from './deviceCategory.types';

const INITIAL_STATE = {
  deviceCategories: null,
  isFetchingDeviceCategories: false,
  fetchDeviceCategoriesErrorMessage: undefined,
};

const deviceCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_START:
      return {
        ...state,
        isFetchingDeviceCategories: true
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_SUCCESS:
      return {
        ...state,
        deviceCategories: action.payload,
        isFetchingDeviceCategories: false
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceCategories: false,
        fetchDeviceCategoriesErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceCategoryReducer;
