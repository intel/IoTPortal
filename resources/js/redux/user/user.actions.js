import { userActionTypes } from './user.types';

export const setUser = user => ({
    type: userActionTypes.SET_USER_OBJ,
    payload: user
})