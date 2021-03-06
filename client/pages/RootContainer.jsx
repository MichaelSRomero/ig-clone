import React, { Component, Fragment } from 'react';
import FooterContainer from '../containers/FooterContainer.jsx';
import downloadApple from '../assets/images/download-apple.png';
import downloadGoogle from '../assets/images/download-google.png';
import LoginForm from '../components/LoginForm.jsx'

class RootContainer extends Component {
  render() {
    return (
      <Fragment>
        <article className="content">
          <div className="content__container content__container-primary">
            <div className="content__logo"></div>
              <LoginForm {...this.props}/>
          </div>
          <div className="content__container content__container--secondary">
            {/* Sign Up Link */}
            <p className="content__sign-up">Don't have an account? <span className="content__sign-up--link">Sign up</span></p>
          </div>
  
          <p className="content__text">Get the app.</p>
          <div className="content__mobile-links">
            {/* Download Buttons */}
            <img className="content__mobile content__mobile--margin content__mobile--opacity" src={downloadApple} alt="Download Apple"/>
            {/* src path for this img works because it looks within 'localhost:${port}/images' folder which is being served staticly by our server*/}
            <img className="content__mobile content__mobile--opacity" src={downloadGoogle} alt="Download Google"/>
          </div>
        </article>

        <FooterContainer />
      </Fragment>
    )
  }
}

export default RootContainer;