import moment from 'moment';
import timerActionTypes from './timer.types';


const INITIAL_STATE = {
  // Tick current time
  currentTime: null,
  currentTimeTickerId: null,
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Tick current time
    case timerActionTypes.TICK_CURRENT_TIME_START:
      return {
        ...state,
        currentTimeTickerId: setInterval(action.tick, action.interval),
      };
    case timerActionTypes.TICK_CURRENT_TIME_STOP:
      if (state.currentTimeTickerId) {
        clearInterval(state.currentTimeTickerId);
      }
      return {
        ...state,
        currentTime: null,
        currentTimeTickerId: null
      };
    case timerActionTypes.UPDATE_CURRENT_TIME:
      return {
        ...state,
        currentTime: moment(),
      };
    default:
      return state;
  }
};

export default timerReducer;
