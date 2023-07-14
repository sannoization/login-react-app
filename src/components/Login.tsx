import React, {FC, useCallback, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {DispatchProps} from "./types";

const Login: FC<DispatchProps> = ({login}) => {
  const emailRef: React.RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: React.RefObject<HTMLInputElement> = useRef(null);
  const afterLogin= useCallback(() => console.log('after login'), []);

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
            <button className="w-100 btn btn-lg btn-warning"onClick={() => {
              login();
              afterLogin();
            }}>Sign in</button>
          </div>
        </div>
      </div>
  )
};

export default Login;