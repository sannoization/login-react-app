import {
  AuthActions,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from "../actions/auth";
import {AuthState} from "../rootReducer";

const initialState: AuthState = {
  pending: false,
  token: '',
  error: null,
}

const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        token: '',
        error: action.payload.error,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        error: null,
      };
    default:
      return {
        ...state
      }
  }
};


export default reducers;