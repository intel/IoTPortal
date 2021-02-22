import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import deviceReducer from './device/device.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
const rootReducer = combineReducers({
    user: userReducer,
    device: deviceReducer,
    sidebar: sidebarReducer
});

export default persistReducer(persistConfig, rootReducer)