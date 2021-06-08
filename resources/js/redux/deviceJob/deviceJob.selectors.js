import moment from 'moment';
import { createSelector } from 'reselect';


const selectDeviceJobReducer = state => state.deviceJob;

export const selectDeviceJob = createSelector(
  [selectDeviceJobReducer],
  deviceJobReducer => deviceJobReducer.deviceJob
);

export const selectIsFetchingDeviceJob = createSelector(
  [selectDeviceJobReducer],
  deviceJobReducer => deviceJobReducer?.isFetchingDeviceJob
);

export const selectFetchDeviceJobErrorMessage = createSelector(
  [selectDeviceJobReducer],
  deviceJobReducer => deviceJobReducer?.fetchDeviceJobErrorMessage
);

export const selectDeviceJobSavedCommand = createSelector(
  [selectDeviceJob],
  deviceJob => deviceJob?.saved_command
);

export const selectDeviceJobDeviceGroup = createSelector(
  [selectDeviceJob],
  deviceJob => deviceJob?.device_group
);

export const selectDeviceJobDevices = createSelector(
  [selectDeviceJobDeviceGroup],
  deviceGroup => deviceGroup?.devices
);

export const selectDeviceJobCommandHistories = createSelector(
  [selectDeviceJob],
  deviceJob => deviceJob?.command_histories
);

export const selectDeviceJobDevicesWithStatus = createSelector(
  [selectDeviceJobDevices, selectDeviceJobCommandHistories],
  (deviceJobDevices, deviceJobCommandHistories) => {
    if (deviceJobDevices && deviceJobCommandHistories) {
      return deviceJobDevices.map(device => {
        const commandHistory = deviceJobCommandHistories.find(commandHistory => {
          return commandHistory.command.device_id === device.id;
        });

        return {
          ...device,
          error: commandHistory?.error,
          started_at: commandHistory?.started_at,
          responded_at: commandHistory?.responded_at,
        };
      });
    }

    return deviceJobDevices;
  }
);

export const selectDeviceJobDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.length || 0
);

export const selectDeviceJobCompletedDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.reduce((accumulator, device) => {
    if (device.error || device.responded_at)
      return accumulator + 1;
    return accumulator;
  }, 0) || 0
);

export const selectDeviceJobSuccessfulDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.reduce((accumulator, device) => {
    if (!device.error && device.responded_at)
      return accumulator + 1;
    return accumulator;
  }, 0) || 0
);

export const selectDeviceJobFailedDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.reduce((accumulator, device) => {
    if (device.error)
      return accumulator + 1;
    return accumulator;
  }, 0) || 0
);

export const selectDeviceJobProcessingDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.reduce((accumulator, device) => {
    if (!device.error && device.started_at && !device.responded_at)
      return accumulator + 1;
    return accumulator;
  }, 0) || 0
);

export const selectDeviceJobPendingDevicesCount = createSelector(
  [selectDeviceJobDevicesWithStatus],
  (deviceJobDevicesWithStatus) => deviceJobDevicesWithStatus?.reduce((accumulator, device) => {
    if (!device.error && !device.started_at && !device.responded_at)
      return accumulator + 1;
    return accumulator;
  }, 0) || 0
);

export const selectDeviceJobCompletedPercentage = createSelector(
  [selectDeviceJobDevicesCount, selectDeviceJobCompletedDevicesCount],
  (deviceJobDevicesCount, deviceJobCompletedDevicesCount) => (deviceJobCompletedDevicesCount / deviceJobDevicesCount) * 100
);

export const selectDeviceJobStartedAt = createSelector(
  [selectDeviceJob],
  deviceJob => deviceJob?.started_at
);

export const selectDeviceJobCompletedAt = createSelector(
  [selectDeviceJob],
  deviceJob => deviceJob?.completed_at
);

export const selectDeviceJobDurationInMs = createSelector(
  [selectDeviceJobStartedAt, selectDeviceJobCompletedAt, selectDeviceJob],
  (deviceJobStartedAt, deviceJobCompletedAt, deviceJob) => {
    if (deviceJobStartedAt && deviceJobCompletedAt) {
      return moment(deviceJobCompletedAt).diff(moment(deviceJobStartedAt));
    } else if (deviceJobStartedAt) {
      return moment().diff(moment(deviceJobStartedAt));
    }
    return 0;
  }
);

export const selectIsPollingFetchDeviceJob = createSelector(
  [selectDeviceJobReducer],
  deviceJobReducer => deviceJobReducer?.isPollingFetchDeviceJob
);