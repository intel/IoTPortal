const deviceMetricActionTypes = {
  // CPU temperatures
  FETCH_CPU_TEMPERATURES_START: 'FETCH_CPU_TEMPERATURES_START',
  FETCH_CPU_TEMPERATURES_SUCCESS: 'FETCH_CPU_TEMPERATURES_SUCCESS',
  FETCH_CPU_TEMPERATURES_FAILURE: 'FETCH_CPU_TEMPERATURES_FAILURE',

  // CPU usages
  FETCH_CPU_USAGES_START: 'FETCH_CPU_USAGES_START',
  FETCH_CPU_USAGES_SUCCESS: 'FETCH_CPU_USAGES_SUCCESS',
  FETCH_CPU_USAGES_FAILURE: 'FETCH_CPU_USAGES_FAILURE',

  // Disk usages
  FETCH_DISK_USAGES_START: 'FETCH_DISK_USAGES_START',
  FETCH_DISK_USAGES_SUCCESS: 'FETCH_DISK_USAGES_SUCCESS',
  FETCH_DISK_USAGES_FAILURE: 'FETCH_DISK_USAGES_FAILURE',

  // Available memories
  FETCH_AVAILABLE_MEMORIES_START: 'FETCH_AVAILABLE_MEMORIES_START',
  FETCH_AVAILABLE_MEMORIES_SUCCESS: 'FETCH_AVAILABLE_MEMORIES_SUCCESS',
  FETCH_AVAILABLE_MEMORIES_FAILURE: 'FETCH_AVAILABLE_MEMORIES_FAILURE',
};

export default deviceMetricActionTypes;