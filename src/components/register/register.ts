import Register from "./Register";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AuthActions, RequestPayload, SIGNUP_REQUEST, SignupRequestActionType} from "../../store/actions/auth";

export type DispatchProps = {
  register: (params: RequestPayload) => SignupRequestActionType;
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>): DispatchProps => ({
  register: (params: RequestPayload) => dispatch({type: SIGNUP_REQUEST, payload: params})
})

export default connect(null, mapDispatchToProps)(Register);