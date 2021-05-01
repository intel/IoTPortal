import profileActionTypes from './profile.types';


const INITIAL_STATE = {
  // Read
  profile: null,
  isFetchingProfile: true,
  fetchProfileErrorMessage: undefined,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Read
    case profileActionTypes.FETCH_PROFILE_START:
      return {
        ...state,
        isFetchingProfile: true,
      };
    case profileActionTypes.FETCH_PROFILE_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        profile: action.payload,
        isFetchingProfile: false,
      };
    case profileActionTypes.FETCH_PROFILE_FAILURE:
      return {
        ...state,
        isFetchingProfile: false,
        fetchProfileErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
