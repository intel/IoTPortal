import userActionTypes from './user.types';


const INITIAL_STATE = {
  // Read
  user: null,
  isFetchingUser: true,
  fetchUserErrorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Read
    case userActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetchingUser: true,
        fetchUserErrorMessage: undefined,
      };
    case userActionTypes.FETCH_USER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
        isFetchingUser: false,
      };
    case userActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetchingUser: false,
        fetchUserErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
