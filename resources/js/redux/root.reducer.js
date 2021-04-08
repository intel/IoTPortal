import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import deviceReducer from './device/device.reducer';
import shutdownReducer from './shutdown/shutdown.reducer';
import rebootReducer from './reboot/reboot.reducer';
import decommissionReducer from './decommission/decommission.reducer';
import aotaReducer from './aota/aota.reducer';
import fotaReducer from './fota/fota.reducer';
import sotaReducer from './sota/sota.reducer';
import cotaReducer from './cota/cota.reducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import commandHistoryReducer from './commandHistory/commandHistory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
  shutdown: shutdownReducer,
  reboot: rebootReducer,
  decommission: decommissionReducer,
  aota: aotaReducer,
  fota: fotaReducer,
  sota: sotaReducer,
  cota: cotaReducer,
  commandHistory: commandHistoryReducer,
  sidebar: sidebarReducer
});

export default persistReducer(persistConfig, rootReducer);