import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import UserProfile from './UserProfile';
import Header from './Header';

const Auth = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  }
  return (
    <>
      <Header />
      {!isAuth 
          ?
            <main>
              <form onSubmit={loginHandler}>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type="email" id='email'/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <button>Login</button>
              </form>
            </main>
          :
            <UserProfile />
      }
    </>
  )
}

export default Auth;