import {State} from "./rootReducer";
import {createSelector} from 'reselect';


const getPending = (state: State) => state.auth.pending;
const getToken = (state: State) => state.auth.token;
const getError = (state: State) => state.auth.error;

export const getAuthSelector = createSelector(getToken, (token) => token);
export const getPendingSelector = createSelector(getPending, (pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);
