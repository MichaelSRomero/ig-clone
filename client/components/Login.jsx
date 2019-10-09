import React, { Component } from 'react';
import OauthLogin from './OauthLogin.jsx'

class Login extends Component {
  render() {
    return (
      <form onSubmit={null}>
        <input 
          className="form__input form__input--border" 
          type="text" 
          name="account" 
          value="" 
          placeholder="Phone number, username, or email"
          onChange={null}/>
        <input 
          className="form__input form__input--border" 
          type="password" 
          name="password" 
          value="" 
          placeholder="Password"
          onChange={null}/>
        <input 
          className="form__login form__login--opacity" 
          type="submit" 
          name="submit" 
          value="Log In"/>
        <div className="form__divider">
          <div className="form__hr"></div>
          <span className="form__text">OR</span>
          <div className="form__hr"></div>
        </div>
        <OauthLogin />
      </form>
    )
  }
}

export default Login;