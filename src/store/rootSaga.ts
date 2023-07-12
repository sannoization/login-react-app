import {all, AllEffect} from "redux-saga/effects";
import authSaga from "./sagas/auth";

export default function* rootSaga(): Generator<AllEffect<any>> {
  yield all([authSaga()])
}