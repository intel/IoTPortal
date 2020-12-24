import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    userObj: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER_OBJ:
            return {
                ...state,
                userObj: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
