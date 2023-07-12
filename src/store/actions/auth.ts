export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestActionType = {
  type: typeof LOGIN_REQUEST;
  payload: RequestPayload;
}
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LoginSuccessActionType = {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
}
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export type LoginFailureActionType = {
  type: typeof LOGIN_FAILURE;
  payload: { error: string };
}
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export type SignupRequestActionType = {
  type: typeof SIGNUP_REQUEST;
  payload: RequestPayload;
}
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export type SignupSuccessActionType = {
  type: typeof SIGNUP_SUCCESS;
  payload: { token: string };
}
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export type SignupFailureActionType = {
  type: typeof SIGNUP_FAILURE;
  payload: { error: string };
}

export interface RequestPayload {
  values: { email: string, password: string };
  callback: any;
}

export type AuthActions =
    | LoginRequestActionType
    | LoginSuccessActionType
    | LoginFailureActionType
    | SignupRequestActionType
    | SignupSuccessActionType
    | SignupFailureActionType