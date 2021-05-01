import loginActionTypes from './login.types';


const INITIAL_STATE = {
  // Read
  user: null,
  isFetchingUser: true,
  fetchUserErrorMessage: undefined,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Read
    case loginActionTypes.FETCH_USER_DETAILS_START:
      return {
        ...state,
        isFetchingUser: true,
      };
    case loginActionTypes.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetchingUser: false,
      };
    case loginActionTypes.FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        isFetchingUser: false,
        fetchUserErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
