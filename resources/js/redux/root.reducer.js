import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import sidebarReducer from './sidebar/sidebar.reducer';

export default combineReducers({
    user: userReducer,
    sidebar: sidebarReducer
});