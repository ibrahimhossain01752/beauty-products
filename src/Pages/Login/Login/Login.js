import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, signInWithGoogle, authError} = useAuth();
   
    const location = useLocation();
    let navigate = useNavigate();
     const redirect = location.state?.from || "/home";

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        //console.log(filed, value);
        const newLoginData = {...loginData};
        newLoginData[filed] = value;
        setLoginData(newLoginData);
    }
    const handleSigninSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        navigate.push(redirect);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle(location, navigate);
      navigate.push(redirect);
  }

    return (
        <div className="banner-main banner-overlay">
             <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={handleSigninSubmit}>
              <div class="form-floating mb-3">
                <input type="email" onChange={handleOnChange} class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" onChange={handleOnChange} class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              {/* <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div> */}
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              </form>
              <hr class="my-4"/>
              <div class="d-grid mb-2">
                <button class="btn btn-google btn-login text-uppercase fw-bold" type="" onClick={handleGoogleSignIn}>
                  <i class="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div class="d-grid">
               <Link to ="/register">
               <button  class="btn btn-facebook btn-login text-uppercase fw-bold txt1" type="submit">
                   New User? Please Register
                </button>
               </Link>
              </div>
              {isLoading && <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>}
        {user?.email && <div class="alert alert-success success-alert" role="alert">
        User created successfully.!
        </div>}
        {authError && <div class="alert alert-danger" role="alert">
  {authError}
</div>}
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  </div>   
        </div>
    );
};

export default Login;