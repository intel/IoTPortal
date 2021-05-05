import deviceGroupActionTypes from './deviceGroup.types';


const INITIAL_STATE = {
  // Index
  deviceGroups: null,
  deviceGroupsTotalRecords: 0,
  isFetchingDeviceGroups: false,
  fetchDeviceGroupsErrorMessage: undefined,
  fetchDeviceGroupsLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

  // Device group devices index
  deviceGroupDevices: null,
  isFetchingDeviceGroupDevices: true,
  fetchDeviceGroupDevicesErrorMessage: undefined,

  // Create
  isCreatingDeviceGroup: false,
  createDeviceGroupErrorMessage: undefined,

  // Read
  deviceGroup: null,
  isFetchingDeviceGroup: true,
  fetchDeviceGroupErrorMessage: undefined,

  // Update
  isUpdatingDeviceGroup: false,
  updateDeviceGroupErrorMessage: undefined,

  // Delete Mass
  isDeletingDeviceGroups: false,
  deleteDeviceGroupsErrorMessage: undefined,

  // Dropdown options
  deviceGroupOptions: null,
  isFetchingDeviceGroupOptions: false,
  fetchDeviceGroupOptionsErrorMessage: undefined,
};

const deviceGroupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceGroupActionTypes.FETCH_DEVICE_GROUPS_START:
      return {
        ...state,
        isFetchingDeviceGroups: true,
        fetchDeviceGroupsErrorMessage: undefined,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUPS_SUCCESS:
      return {
        ...state,
        deviceGroups: action.payload.data,
        deviceGroupsTotalRecords: action.payload.total,
        isFetchingDeviceGroups: false,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUPS_FAILURE:
      return {
        ...state,
        isFetchingDeviceGroups: false,
        fetchDeviceGroupsErrorMessage: action.payload,
      };
    case deviceGroupActionTypes.SET_FETCH_DEVICE_GROUPS_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceGroupsLazyParams: action.payload,
      };
    case deviceGroupActionTypes.RESET_FETCH_DEVICE_GROUPS_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceGroupsLazyParams: INITIAL_STATE.fetchDeviceGroupsLazyParams,
      };

    // Device group devices index
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_START:
      return {
        ...state,
        isFetchingDeviceGroupDevices: true,
        fetchDeviceGroupDevicesErrorMessage: undefined,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_SUCCESS:
      return {
        ...state,
        deviceGroupDevices: action.payload.data,
        isFetchingDeviceGroupDevices: false,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_FAILURE:
      return {
        ...state,
        isFetchingDeviceGroupDevices: false,
        fetchDeviceGroupDevicesErrorMessage: action.payload,
      };

    // Create
    case deviceGroupActionTypes.CREATE_DEVICE_GROUP_START:
      return {
        ...state,
        isCreatingDeviceGroup: true,
        createDeviceGroupErrorMessage: undefined,
      };
    case deviceGroupActionTypes.CREATE_DEVICE_GROUP_SUCCESS:
      return {
        ...state,
        isCreatingDeviceGroup: false,
      };
    case deviceGroupActionTypes.CREATE_DEVICE_GROUP_FAILURE:
      return {
        ...state,
        isCreatingDeviceGroup: false,
        createDeviceGroupErrorMessage: action.payload,
      };

    // Read
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_START:
      return {
        ...state,
        isFetchingDeviceGroup: true,
        fetchDeviceErrorMessage: undefined,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_SUCCESS:
      return {
        ...state,
        deviceGroup: action.payload,
        isFetchingDeviceGroup: false,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_FAILURE:
      return {
        ...state,
        isFetchingDeviceGroup: false,
        fetchDeviceErrorMessage: action.payload,
      };

    // Update
    case deviceGroupActionTypes.UPDATE_DEVICE_GROUP_START:
      return {
        ...state,
        isUpdatingDeviceGroup: true,
        updateDeviceGroupErrorMessage: undefined,
      };
    case deviceGroupActionTypes.UPDATE_DEVICE_GROUP_SUCCESS:
      return {
        ...state,
        deviceGroup: action.payload,
        isUpdatingDeviceGroup: false,
      };
    case deviceGroupActionTypes.UPDATE_DEVICE_GROUP_FAILURE:
      return {
        ...state,
        isUpdatingDeviceGroup: false,
        updateDeviceGroupErrorMessage: action.payload,
      };

    // Delete Mass
    case deviceGroupActionTypes.DELETE_DEVICE_GROUPS_START:
      return {
        ...state,
        isDeletingDeviceGroups: true,
        deleteDeviceGroupsErrorMessage: undefined,
      };
    case deviceGroupActionTypes.DELETE_DEVICE_GROUPS_SUCCESS:
      return {
        ...state,
        isDeletingDeviceGroups: false,
      };
    case deviceGroupActionTypes.DELETE_DEVICE_GROUPS_FAILURE:
      return {
        ...state,
        isDeletingDeviceGroups: false,
        deleteDeviceGroupsErrorMessage: action.payload,
      };

    // Set selection
    case deviceGroupActionTypes.SET_DEVICE_GROUP_DEVICES:
      return {
        ...state,
        deviceGroupDevices: action.payload,
      };

    // Dropdown options
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_START:
      return {
        ...state,
        isFetchingDeviceGroupOptions: true,
        fetchDeviceGroupOptionsErrorMessage: undefined,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_SUCCESS:
      return {
        ...state,
        deviceGroupOptions: action.payload,
        isFetchingDeviceGroupOptions: false,
      };
    case deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingDeviceGroupOptions: false,
        fetchDeviceGroupOptionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceGroupReducer;
