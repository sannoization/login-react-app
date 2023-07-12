import React, {useRef} from "react";
import {Dispatch} from "redux";
import {AuthActions, LOGIN_REQUEST} from "../store/actions/auth";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

const Login: React.FC<{}> = (props: any) => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const callback = (data: any) => {
    console.log("inside callback after login");
  }
  const login = () => {
    let data: any = {
      values: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      callback
    }
    props.login(data);
  }

  return (
      <div className="container">
        <div className='row'>
          <div className="col-md-5 mx-auto card mt-5 p-5">


            <h1>this is a login component</h1>
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
              login();
            }}
                    className="w-100 btn btn-lg btn-warning"
            >Sign in</button>
          </div>
        </div>
      </div>
  )
};

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
  login: (params: any) => dispatch({type: LOGIN_REQUEST, payload: params})
})

export default connect(null, mapDispatchToProps)(Login);