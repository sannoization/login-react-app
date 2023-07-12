import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";

export type Auth = {
  token: string;
}
export type AuthState = {
  pending: boolean;
  token: string;
  error: string | null;
}

const rootReducer = combineReducers({
  auth: authReducer,
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
