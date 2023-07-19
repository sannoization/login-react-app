import React, {useRef} from "react";
import {Dispatch} from "redux";
import {AuthActions, SIGNUP_REQUEST} from "../store/actions/auth";
import {connect} from "react-redux";

const Register: React.FC = (props: any) => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const callback = (data: any) => {
    console.log("inside callback after login");
  }
  const register = () => {
    let data: any = {
      values: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      callback
    }
    props.register(data);
  }

  return (
      <div className="container">
        <div className='row'>
          <div className="col-md-5 mx-auto card mt-5 p-5">


            <h1>Register</h1>
            <div className='form-floating'>
              <input
                  type="email"
                  className='form-control'
                  name='email'
                  id='floatingInput'
                  placeholder='name@example.com'
                  ref={emailRef}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-3">
              <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="floatingPassword"
                  placeholder="password"
                  ref={passwordRef}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={() => {
              register();
            }}
                    className="w-100 btn btn-lg btn-warning mt-3"
            >Sign up</button>
          </div>
        </div>
      </div>
  )
};

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
  register: (params: any) => dispatch({type: SIGNUP_REQUEST, payload: params})
})

export default connect(null, mapDispatchToProps)(Register);