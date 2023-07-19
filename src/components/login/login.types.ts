import {AuthActions, LOGIN_REQUEST, LoginRequestActionType, RequestPayload} from '../../store/actions/auth';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Login from "./Login";

export type DispatchProps = {
  login: (params: RequestPayload) => LoginRequestActionType;
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>): DispatchProps => ({
  login: (params: RequestPayload) => dispatch({type: LOGIN_REQUEST, payload: params})
})

export default connect(null, mapDispatchToProps)(Login);