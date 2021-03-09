import otaActionTypes from './aota.types';

const INITIAL_STATE = {
    isSubmittingAota: false,
    submitAotaErrorMessage: undefined
}

const aotaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case otaActionTypes.SUBMIT_AOTA_START:
            return {
                ...state,
                isSubmittingAota: true
            };
        case otaActionTypes.SUBMIT_AOTA_SUCCESS:
            return {
                ...state,
                isSubmittingAota: false
            };
        case otaActionTypes.SUBMIT_AOTA_FAILURE:
            return {
                ...state,
                isSubmittingAota: false,
                submitAotaErrorMessage: action.payload
            };
        default:
            return state;
    }
}

export default aotaReducer;
