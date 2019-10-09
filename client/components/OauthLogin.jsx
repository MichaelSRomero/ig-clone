import React, { Fragment } from 'react';

const OauthLogin = () => {
  return (
    <Fragment>
      <div className="form__alternative form__alternative--opacity">
        <img className="form__logo" src="./images/facebook-logo.png" alt=""/>
        <span className="form__link">Log in with Facebook</span>
      </div>
      <p className="form__forgot-pw form__forgot-pw--opacity">Forgot password?</p>
    </Fragment>
  )
}

export default OauthLogin;