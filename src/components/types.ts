import {AuthActions, LOGIN_REQUEST, LoginRequestActionType} from "../store/actions/auth";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Login from "./Login";

export type DispatchProps = {
  login: () => LoginRequestActionType;
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
  login: (params: any) => dispatch({type: LOGIN_REQUEST, payload: params})
})

export default connect(null, mapDispatchToProps)(Login);