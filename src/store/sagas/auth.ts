import {headers, LOGIN_URL, REGISTER_URL} from "./constants";
import {call, put, all, takeLatest, AllEffect, ForkEffect} from 'redux-saga/effects'
import axios from "axios";
import {
  LOGIN_FAILURE, LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LoginRequestActionType, SIGNUP_FAILURE, SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SignupRequestActionType
} from "../actions/auth";


const login = async (payload: { email: string, password: string }) => {
  const params = {
    email: payload.email,
    password: payload.password,
  }
  const {data} = await axios.post(LOGIN_URL, params, {headers: headers})
  return data;
}

const register = async (payload: { email: string, password: string }) => {
  const {data} = await axios.post(REGISTER_URL, {...payload}, {headers: headers})
  return data;
}

function* loginSaga(action: LoginRequestActionType) {
  try {
    const response: {token: string} = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    yield put({type: LOGIN_SUCCESS, payload: {token: response.token}  });
    action.payload.callback(response.token);

  } catch (e: any) {
    console.log(e);
    yield put({type: LOGIN_FAILURE, payload: {error: e.message}})
  }
}

function* registerSaga(action: SignupRequestActionType) {
  try {
    const response: {token: string} = yield call(register, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    yield put({type: SIGNUP_SUCCESS, payload: {token: response.token}  });
    action.payload.callback(response.token);

  } catch (e: any) {
    console.log(e);
    yield put({type: SIGNUP_FAILURE, payload: {error: e.message}})
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

function* watchRegister() {
  yield takeLatest(SIGNUP_REQUEST, registerSaga);
}

export type AuthSagaStateType = Generator<AllEffect<Generator<ForkEffect<never>, void>>>;

export default function* authSaga(): AuthSagaStateType {
  yield all([watchLogin(), watchRegister()])
}
