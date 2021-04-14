import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import deviceCategoryReducer from './deviceCategory/deviceCategory.reducer';
import deviceCommandReducer from './deviceCommand/deviceCommand.reducer';
import deviceEventReducer from './deviceEvent/deviceEvent.reducer';
import deviceStatusReducer from './deviceStatus/deviceStatus.reducer';
import deviceMetricReducer from './deviceMetric/deviceMetric.reducer';
import deviceCommandHistoryReducer from './deviceCommandHistory/deviceCommandHistory.reducer';
import deviceEventHistoryReducer from './deviceEventHistory/deviceEventHistory.reducer';
import deviceReducer from './device/device.reducer';
import shutdownReducer from './shutdown/shutdown.reducer';
import rebootReducer from './reboot/reboot.reducer';
import decommissionReducer from './decommission/decommission.reducer';
import aotaReducer from './aota/aota.reducer';
import fotaReducer from './fota/fota.reducer';
import sotaReducer from './sota/sota.reducer';
import cotaReducer from './cota/cota.reducer';
import sidebarReducer from './sidebar/sidebar.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  deviceCategory: deviceCategoryReducer,
  deviceCommand: deviceCommandReducer,
  deviceEvent: deviceEventReducer,
  deviceStatus: deviceStatusReducer,
  deviceMetric: deviceMetricReducer,
  deviceCommandHistory: deviceCommandHistoryReducer,
  deviceEventHistory: deviceEventHistoryReducer,
  device: deviceReducer,
  shutdown: shutdownReducer,
  reboot: rebootReducer,
  decommission: decommissionReducer,
  aota: aotaReducer,
  fota: fotaReducer,
  sota: sotaReducer,
  cota: cotaReducer,
  sidebar: sidebarReducer
});

export default persistReducer(persistConfig, rootReducer);