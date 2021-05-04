import deviceCategoryActionTypes from '../deviceCategory/deviceCategory.types';


const INITIAL_STATE = {
  // Index
  deviceCategories: null,
  deviceCategoriesTotalRecords: 0,
  isFetchingDeviceCategories: false,
  fetchDeviceCategoriesErrorMessage: undefined,
  fetchDeviceCategoriesLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

  // Create
  isCreatingDeviceCategory: false,
  createDeviceCategoryErrorMessage: undefined,

  // Read
  deviceCategory: null,
  isFetchingDeviceCategory: true,
  fetchDeviceCategoryErrorMessage: undefined,

  // Update
  isUpdatingDeviceCategory: false,
  updateDeviceCategoryErrorMessage: undefined,

  // Delete Mass
  isDeletingDeviceCategories: false,
  deleteDeviceCategoriesErrorMessage: undefined,

  // Dropdown options
  deviceCategoryOptions: null,
  isFetchingDeviceCategoryOptions: false,
  fetchDeviceCategoryOptionsErrorMessage: undefined,
};

const deviceCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_START:
      return {
        ...state,
        isFetchingDeviceCategories: true,
        fetchDeviceCategoriesErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_SUCCESS:
      return {
        ...state,
        deviceCategories: action.payload.data,
        deviceCategoriesTotalRecords: action.payload.total,
        isFetchingDeviceCategories: false,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceCategories: false,
        fetchDeviceCategoriesErrorMessage: action.payload,
      };
    case deviceCategoryActionTypes.SET_FETCH_DEVICE_CATEGORIES_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceCategoriesLazyParams: action.payload,
      };

    // Create
    case deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_START:
      return {
        ...state,
        isCreatingDeviceCategory: true,
        createDeviceCategoryErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        isCreatingDeviceCategory: false,
      };
    case deviceCategoryActionTypes.CREATE_DEVICE_CATEGORY_FAILURE:
      return {
        ...state,
        isCreatingDeviceCategory: false,
        createDeviceCategoryErrorMessage: action.payload,
      };

    // Read
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_START:
      return {
        ...state,
        isFetchingDeviceCategory: true,
        fetchDeviceCategoryErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        deviceCategory: action.payload,
        isFetchingDeviceCategory: false,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_FAILURE:
      return {
        ...state,
        isFetchingDeviceCategory: false,
        fetchDeviceCategoryErrorMessage: action.payload,
      };

    // Update
    case deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_START:
      return {
        ...state,
        isUpdatingDeviceCategory: true,
        updateDeviceCategoryErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        deviceCategory: action.payload,
        isUpdatingDeviceCategory: false,
      };
    case deviceCategoryActionTypes.UPDATE_DEVICE_CATEGORY_FAILURE:
      return {
        ...state,
        isUpdatingDeviceCategory: false,
        updateDeviceCategoryErrorMessage: action.payload,
      };

    // Delete Mass
    case deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_START:
      return {
        ...state,
        isDeletingDeviceCategories: true,
        deleteDeviceCategoriesErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_SUCCESS:
      return {
        ...state,
        isDeletingDeviceCategories: false,
      };
    case deviceCategoryActionTypes.DELETE_DEVICE_CATEGORIES_FAILURE:
      return {
        ...state,
        isDeletingDeviceCategories: false,
        deleteDeviceCategoriesErrorMessage: action.payload,
      };

    // Dropdown options
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_START:
      return {
        ...state,
        isFetchingDeviceCategoryOptions: true,
        fetchDeviceCategoryOptionsErrorMessage: undefined,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_SUCCESS:
      return {
        ...state,
        deviceCategoryOptions: action.payload,
        isFetchingDeviceCategoryOptions: false,
      };
    case deviceCategoryActionTypes.FETCH_DEVICE_CATEGORY_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingDeviceCategoryOptions: false,
        fetchDeviceCategoryOptionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceCategoryReducer;
