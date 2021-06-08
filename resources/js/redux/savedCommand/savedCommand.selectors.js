import { createSelector } from 'reselect';

const selectSavedCommandReducer = state => state.savedCommand;

// savedCommand
export const selectSavedCommand = createSelector(
  [selectSavedCommandReducer],
  savedCommandReducer => savedCommandReducer.savedCommand,
);

export const selectSavedCommandName = createSelector(
  [selectSavedCommand],
  savedCommand => savedCommand?.name,
);

export const selectSavedCommandCommandName = createSelector(
  [selectSavedCommand],
  savedCommand => savedCommand?.command_name,
);

export const selectSavedCommandPayload = createSelector(
  [selectSavedCommand],
  savedCommand => savedCommand?.payload,
);

// Dropdown options
export const selectSavedCommandOptions = createSelector(
  [selectSavedCommandReducer],
  savedCommandReducer => savedCommandReducer.savedCommandOptions,
);

export const selectIsFetchingSavedCommandOptions = createSelector(
  [selectSavedCommandReducer],
  savedCommandReducer => savedCommandReducer.isFetchingSavedCommandOptions,
);

export const selectFetchSavedCommandOptionsErrorMessage = createSelector(
  [selectSavedCommandReducer],
  savedCommandReducer => savedCommandReducer.fetchSavedCommandOptionsErrorMessage,
);
