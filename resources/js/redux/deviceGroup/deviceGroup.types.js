const deviceGroupActionTypes = {
  // Index
  FETCH_DEVICE_GROUPS_START: 'FETCH_DEVICE_GROUPS_START',
  FETCH_DEVICE_GROUPS_SUCCESS: 'FETCH_DEVICE_GROUPS_SUCCESS',
  FETCH_DEVICE_GROUPS_FAILURE: 'FETCH_DEVICE_GROUPS_FAILURE',
  SET_FETCH_DEVICE_GROUPS_LAZY_PARAMS: 'SET_FETCH_DEVICE_GROUPS_LAZY_PARAMS',
  RESET_FETCH_DEVICE_GROUPS_LAZY_PARAMS: 'RESET_FETCH_DEVICE_GROUPS_LAZY_PARAMS',

  // Device group devices index
  FETCH_DEVICE_GROUP_DEVICES_START: 'FETCH_DEVICE_GROUP_DEVICES_START',
  FETCH_DEVICE_GROUP_DEVICES_SUCCESS: 'FETCH_DEVICE_GROUP_DEVICES_SUCCESS',
  FETCH_DEVICE_GROUP_DEVICES_FAILURE: 'FETCH_DEVICE_GROUP_DEVICES_FAILURE',

  // Create
  CREATE_DEVICE_GROUP_START: 'CREATE_DEVICE_GROUP_START',
  CREATE_DEVICE_GROUP_SUCCESS: 'CREATE_DEVICE_GROUP_SUCCESS',
  CREATE_DEVICE_GROUP_FAILURE: 'CREATE_DEVICE_GROUP_FAILURE',

  // Read
  FETCH_DEVICE_GROUP_START: 'FETCH_DEVICE_GROUP_START',
  FETCH_DEVICE_GROUP_SUCCESS: 'FETCH_DEVICE_GROUP_SUCCESS',
  FETCH_DEVICE_GROUP_FAILURE: 'FETCH_DEVICE_GROUP_FAILURE',

  // Update
  UPDATE_DEVICE_GROUP_START: 'UPDATE_DEVICE_GROUP_START',
  UPDATE_DEVICE_GROUP_SUCCESS: 'UPDATE_DEVICE_GROUP_SUCCESS',
  UPDATE_DEVICE_GROUP_FAILURE: 'UPDATE_DEVICE_GROUP_FAILURE',

  // Delete Mass
  DELETE_DEVICE_GROUPS_START: 'DELETE_DEVICE_GROUPS_START',
  DELETE_DEVICE_GROUPS_SUCCESS: 'DELETE_DEVICE_GROUPS_SUCCESS',
  DELETE_DEVICE_GROUPS_FAILURE: 'DELETE_DEVICE_GROUPS_FAILURE',

  // Set selection
  SET_DEVICE_GROUP_DEVICES: 'SET_DEVICE_GROUP_DEVICES',

  // Fetch dropdown options
  FETCH_DEVICE_GROUP_OPTIONS_START: 'FETCH_DEVICE_GROUP_OPTIONS_START',
  FETCH_DEVICE_GROUP_OPTIONS_SUCCESS: 'FETCH_DEVICE_GROUP_OPTIONS_SUCCESS',
  FETCH_DEVICE_GROUP_OPTIONS_FAILURE: 'FETCH_DEVICE_GROUP_OPTIONS_FAILURE',
};

export default deviceGroupActionTypes;